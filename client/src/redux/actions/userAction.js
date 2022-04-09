import { SET_USER, DELETE_USER } from '../types/userTypes';
import * as config from '../../config/config';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (payload, navigate) => async (dispatch) => {
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
  } else {
    navigate('/signup');
  }
};

export const signIn = (payload, navigate, from) => async (dispatch) => {
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
    navigate(from);
  } else {
    navigate('/signin');
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
