const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/signup`;
export const signIn = () => `${host}/login`;
export const signOut = () => `${host}/logout`;
export const checkAuth = () => `${host}/check`;

export const getUser = (id) => `${host}/profile/${id}`;
export const editUser = (id) => `${host}/profile/${id}`;

export const getAuction = (id) => `${host}/bidding/${id}`;
export const getComments = (id) => `${host}/addComment/${id}`;
export const addComments = (id) => `${host}/addComment/${id}`;
export const addPrice = (id) => `${host}/userBidding/${id}`;
