import axios from 'axios';

const BASE_URL = "/api"

export const register = async (username, password) => {
  try {
    const { data: user } = await axios.post(`${BASE_URL}/users/register`,{
      username,
      password
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export const login = async (username, password) => {
  try {
    const { data: {token} } = await axios.post(`${BASE_URL}/users/login`, {
      username,
      password
    });
    return token;
  } catch (error) {
    throw error;
  }
}

export const createRoutine = async (token, routine) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/routines`, routine, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export const editRoutine = async (token, routine) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/routines/${routine.id}`, routine, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export const getUserData = async (token) => {
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

export const getActivities = async () => {
  try {
    const { data: activities } = await axios.get(`${BASE_URL}/activities`);
    return activities;
  } catch (error) {
    throw error;
  }
}

export const createActivity = async (token, name, description) => {
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

export const getRoutines = async () => {
  try {
    const { data: routines } = await axios.get(`${BASE_URL}/routines`);
    return routines;
  } catch (error) {
    throw error;
  }
}

export const getUsersRoutines = async (token, username) => {
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

export const deleteRoutine = async (token, routineId) => {
  try {
    await axios.delete(`${BASE_URL}/routines/${routineId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    throw error;
  }
}
 
export const addActivityToRoutine = async (token, routineId, activity) => {
  console.log(activity);
  try {
    await axios.post(`${BASE_URL}/routines/${routineId}/activities`, {...JSON.parse(activity)}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    throw error;
  }
}
 
