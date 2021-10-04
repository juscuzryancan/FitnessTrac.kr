import axios from 'axios';

const BASE_URL = "/api"

const register = async (username, password) => {
    try {
        const { data: user } = await axios.post(`${BASE_URL}/users/register`,{
            username,
            password
        });
        return data;
    } catch (error) {
        throw error;
    }
}

const login = async (username, password) => {
    try {
        const { data: token } = await axios.post(`${BASE_URL}/users/login`, {
            username,
            password
        });
        return token;
    } catch (error) {
        throw error;
    }
}

const getUserData = async (token) => {
    try {
        const { data: user } = await axios.get(`${BASE_URL}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return user;
    } catch (error) {
        throw error;
    }
}

const getActivities = async () => {
    try {
        const { data: activities } = await axios.get(`${BASE_URL}/activities`);
        return activities;
    } catch (error) {
        throw error;
    }
}

const createActivity = async (token, name, description) => {
    try {
        const { data: activity } = await axios.post(`${BASE_URL}/activities`,
            { name, description },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        return activity;
    } catch (error) {
        throw error;
    }
}

const getRoutines = async () => {
    try {
        const { data: routines } = await axios.get(`${BASE_URL}/routines`);
        return routines;
    } catch (error) {
        throw error;
    }
}

const getUsersRoutines = async (token, username) => {
    try {
        const { data: routines } = await axios.get(`${BASE_URL}/users/${username}/routines`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
        });
        return routines;
    } catch (error) {
        throw error;
    }
}

export { 
    register,
    getUserData,
    login,
    getActivities,
    createActivity,
    getRoutines,
    getUsersRoutines 
};
