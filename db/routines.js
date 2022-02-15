const client = require('./client');
const util = require('util');
const { getRoutineActivitiesByRoutine } = require('.');

const createRoutine = async ({ creatorId, isPublic, name, goal }) => {

    try {

        const { rows: [routine] } = await client.query(`
            INSERT INTO routines( "creatorId", "isPublic", name, goal )
            VALUES ( $1, $2, $3, $4 )
            RETURNING *;
        `, [ creatorId, isPublic, name, goal ]);

        return routine;

    } catch (error) {
        throw error;
    }
};

const getRoutinesWithoutActivities = async () => {
    try {

        const { rows: routines } = await client.query(`
            SELECT * FROM routines;
        `);

        return routines;

    } catch (error) {
        throw error;
    }
};

const getAllRoutines = async () => {

    try {

        const { rows: routines } = await client.query(`
            SELECT routines.*, users.username AS "creatorName"
            FROM routines
            JOIN users
            ON routines."creatorId" = users.id;
        `);

        const { rows: activities } = await client.query(`
            SELECT activities.*, routine_activities.count, routine_activities.duration, routine_activities."routineId"
            FROM activities
            RIGHT JOIN routine_activities 
            ON activities.id = routine_activities."activityId"
        `);

        for(const routine of routines) {
            routine.activities = [];
            for(const activity of activities) {
                if(activity.routineId === routine.id) {
                    delete activity.routineId;
                    routine.activities.push(activity);
                }
            }
        }

        return routines;

    } catch (error) {
        throw error;
    }
};


const getAllPublicRoutines = async () => {

    try {

        const { rows: routines } = await client.query(`
            SELECT routines.*, users.username AS "creatorName"
            FROM routines
            JOIN users
            ON routines."creatorId" = users.id
            WHERE routines."isPublic" = true;
        `);

        const { rows: activities } = await client.query(`
            SELECT activities.*, routine_activities.count, routine_activities.duration, routine_activities."routineId"
            FROM activities
            RIGHT JOIN routine_activities 
            ON activities.id = routine_activities."activityId"
        `);

        for(const routine of routines) {
            routine.activities = [];
            for(const activity of activities) {
                if(activity.routineId === routine.id) {
                    delete activity.routineId;
                    routine.activities.push(activity);
                }
            }
        }

        return routines;

    } catch (error) {
        throw error;
    }

};

const getAllRoutinesByUser = async ({username}) => {

    try {

        const { rows: routines } = await client.query(`
            SELECT routines.*, users.username AS "creatorName"
            FROM routines
            JOIN users
            ON routines."creatorId" = users.id
            WHERE users.username = $1;
        `, [username]);

        const { rows: activities } = await client.query(`
            SELECT activities.*, routine_activities.count, routine_activities.duration, routine_activities."routineId"
            FROM activities
            RIGHT JOIN routine_activities 
            ON activities.id = routine_activities."activityId"
        `);

        for(const routine of routines) {
            routine.activities = [];
            for(const activity of activities) {
                if(activity.routineId === routine.id) {
                    delete activity.routineId;
                    routine.activities.push(activity);
                }
            }
        }

        return routines;

    } catch (error) {
        throw error;
    }

};

const getPublicRoutinesByUser = async ({username}) => {

    try {

        const { rows: routines } = await client.query(`
            SELECT routines.*, users.username AS "creatorName"
            FROM routines
            JOIN users
            ON routines."creatorId" = users.id
            WHERE users.username = $1
            AND routines."isPublic" = 'true';
        `, [username]);

        const { rows: activities } = await client.query(`
            SELECT activities.*, routine_activities.count, routine_activities.duration, routine_activities."routineId"
            FROM activities
            RIGHT JOIN routine_activities 
            ON activities.id = routine_activities."activityId"
        `);

        for(const routine of routines) {
            routine.activities = [];
            for(const activity of activities) {
                if(activity.routineId === routine.id) {
                    delete activity.routineId;
                    routine.activities.push(activity);
                }
            }
        }

        return routines;

    } catch (error) {
        throw error;
    }

};

const getPublicRoutinesByActivity = async ({id: activityId}) => {

    try {

        const { rows: routineActivities } = await client.query(`
            SELECT "routineId"
            FROM routine_activities
            WHERE "activityId" = $1
        `, [activityId]);

        if (!routineActivities.length) {
            throw Error("There are no routines with this activity");
        }

        const routineActivityIdString = routineActivities.map(({routineId}) => routineId ).join(", ")

        const { rows: routines } = await client.query(`
            SELECT routines.*, users.username AS "creatorName"
            FROM routines
            JOIN users
            ON routines."creatorId" = users.id
            WHERE routines.id 
            IN (${routineActivityIdString});
        `);

        const { rows: activities } = await client.query(`
            SELECT activities.*, routine_activities.count, routine_activities.duration, routine_activities."routineId"
            FROM activities
            RIGHT JOIN routine_activities 
            ON activities.id = routine_activities."activityId"
            WHERE routine_activities."routineId"
            IN (${routineActivityIdString})
        `);

        for(const routine of routines) {
            routine.activities = [];
            for(const activity of activities) {
                if(activity.routineId === routine.id) {
                    delete activity.routineId;
                    routine.activities.push(activity);
                }
            }
        }

        return routines;

    } catch (error) {
        throw error;
    }

};

const updateRoutine = async ({id, ...fields }) => {

    const fieldKeys = Object.keys(fields);

    if (fieldKeys.length === 0) { 
        return; 
    }

    const setString = fieldKeys.map((fieldName, index) => {
        return `"${fieldName}"=$${index+1}`
    }).join(', ');

    const setValues = Object.values(fields);
    setValues.push(id);


    try {
        const { rows: [routine] } = await client.query(`
            UPDATE routines
            SET ${setString}
            WHERE id = $${setValues.length}
            RETURNING *;
        `, setValues);

        return routine;
    } catch (error) {
        throw error;
    }

};

const getRoutineById = async (id) => {

    try {

        const { rows: [ routine ] } = await client.query(`
            SELECT * FROM routines
            WHERE id = $1;
        `, [id]);

        return routine;

    } catch (error) {
        throw error;
    }

}

const destroyRoutine = async (id) => {

    try {

        const { rows: [routine] } = await client.query(`
           DELETE FROM routines
           WHERE id=$1
           RETURNING *;
        `, [id]);

        await client.query(`
           DELETE FROM routine_activities
           WHERE "routineId"=$1;
        `, [id]);

        return routine;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    createRoutine,
    getRoutinesWithoutActivities,
    getAllRoutines,
    updateRoutine,
    getAllPublicRoutines,
    getAllRoutinesByUser,
    getPublicRoutinesByUser,
    getPublicRoutinesByActivity,
    getRoutineById,
    destroyRoutine,
};