const express = require('express');
const router = express.Router();

const { getRoutineByName, getAllPublicRoutines, createRoutine, updateRoutine, getRoutineById, destroyRoutine } = require('../db/routines');
const { addActivityToRoutine } = require('../db/routine_activities');
const { requireUser } = require('./utils');

router.get('/', async (req, res, next) => {
    try {
        const routines = await getAllPublicRoutines();
        res.send(routines);
    } catch (error) {
        next(error);
    }
});

router.post('/', requireUser, async (req, res, next) => {
    try {
        const { isPublic, name, goal } = req.body;

        const dupeRoutine = await getRoutineByName(name)
        if(dupeRoutine) {
            res.status(400).send({
                name: "RoutineAlreadyExists",
                message: "A routine with this name already exists"
            })
            return;
        }

        const routine = await createRoutine({creatorId: req.user.id, isPublic, name, goal});
        res.send(routine);
    } catch (error) {
        next(error);
    }
});

router.patch('/:routineId', requireUser, async (req, res, next) => {
    try {
        const { routineId } = req.params;
        const { isPublic, name, goal } = req.body;
        const routine = await getRoutineById(routineId);
        if (routine.creatorId === req.user.id){
            const updatedRoutine = await updateRoutine({id: routineId, isPublic, name, goal});
            return res.send(updatedRoutine);
        } else {
            next({message: 'You must be the creator of this routine'});
        }
    } catch (error) {
        next(error);
    }
});

router.delete('/:routineId', requireUser, async (req, res, next) => {
    try {
        const { routineId } = req.params;
        const routine = await getRoutineById(routineId);
        if (routine.creatorId === req.user.id) {
            await destroyRoutine(routineId);
            res.status(200);
        } else {
            next({message: 'You must be the creator of this routine'});
        }
    } catch (error) {
        next(error);
    }
});

router.post('/:routineId/activities', async (req, res, next) => {
    try {
        const { routineId } = req.params;
        const { activityId, count, duration } = req.body;
        const ra = await addActivityToRoutine({ routineId: routineId * 1, activityId: activityId * 1, count, duration });
        res.send(ra);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
