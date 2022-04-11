import axios from 'axios';
import { SET_USER, DELETE_USER } from '../types/userTypes';
import * as config from '../../config/config';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (payload, navigate, setError) => async (dispatch) => {
  const response = await fetch(config.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate(`/profile/${user.id}`);
  } else if (response.status === 400) {
    setError(true);
    setTimeout(() => { navigate('/login'); }, 1500);
  }
};

export const signIn = (payload, navigate, setError) => async (dispatch) => {
  const response = await fetch(config.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate(`/profile/${user.id}`);
  } else if (response.status === 401) {
    setError(true);
  }
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(config.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(config.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

export const getUserData = (id) => async (dispatch) => {
  axios.get(`${config.getUser(id.id)}`)
    .then((response) => dispatch(setUser(response.data)));
};

export const editUser = (inputs, id) => async (dispatch) => {
  const formData = new FormData();
  console.log(inputs);
  formData.append('file', inputs.file ?? inputs.photo);
  formData.append('name', inputs.name);
  formData.append('email', inputs.email);
  formData.append('phone', Number(inputs.phone));
  await fetch(`${config.editUser(id.id)}`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(setUser(data)));
  // if (response.status === 200) { await dispatch(editUser(response.json())); }
};
