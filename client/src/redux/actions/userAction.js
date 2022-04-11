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

export const editUser = (dataFromUser) => async (dispatch) => {
  // const {
  //   user: { id: userId },
  // } = getState();
  console.log('JJJJ', dataFromUser);
  // const response = await fetch(config.editUser(userId), {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   credentials: 'include',
  //   body: JSON.stringify(user),
  // });
  // if (response.status === 200) {
  //   const userData = await response.json();
  dispatch(setUser(dataFromUser));
  // navigate(`/users/${dataFromUser.id}`);
  // } else {
  //   navigate.replace('/');
  // }
};
