const initState = {
  user: null,
  products: [],
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initState;
};

export default getInitState;
