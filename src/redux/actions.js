const apiHost = process.env.REACT_APP_API_HOST  || 'http://localhost:3001';
const axios = require('axios');

export const loginUser = (email, password) => {
  return dispatch => {
    setTimeout(() => { // stub api call
      dispatch({
        type: 'LOGIN_USER',
        payload: {
          email,
          password,
          firstName: '',
          lastName: '',
        }
      });
    }, 1000);
  }
}

export const createUser = (email, password, firstName, lastName, learningTargets, location) => {
  return dispatch => {
    const user = {
      email,
      password,
      firstName,
      lastName,
      learningTargets,
      location
    };
    axios.post(`${apiHost}/students`, user)
    .then(response => {
      dispatch({
        type: 'CREATE_USER',
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'CREATE_USER_ERROR',
        payload: getErrorMessage(err)
      })
    })
  }
}

export const updateUser = (email, password, firstName, lastName, learningTargets, location) => {
  return (dispatch, getState) => {
    const user = {
      email,
      password,
      firstName,
      lastName,
      learningTargets,
      location
    };
    const state = getState();
    axios.put(`${apiHost}/students/${email}`, user, { auth: {username: email, password: state.user.data.password}})
    .then(response => {
      dispatch({
        type: 'UPDATE_USER',
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: 'UPDATE_USER_ERROR',
        payload: getErrorMessage(err)
      })
    })
  }
}

function getErrorMessage(err) {
  let message = null;
  if (err.response) {
    message = err.response.data.error || err.response.data;
  } else if (err.request) {
    message = "No response from backend service.";
  } else {
    message = err.message;
  }
  return message;
}
