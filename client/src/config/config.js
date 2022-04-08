const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/signup`;
export const signIn = () => `${host}/login`;
export const signOut = () => `${host}/logout`;
export const checkAuth = () => `${host}/check`;