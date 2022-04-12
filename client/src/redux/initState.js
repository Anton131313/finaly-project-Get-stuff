const initState = {
  user: null,
  products: [],
  auction: [],
  search: '',
};

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  return stateFromLS || initState;
};

export default getInitState;
