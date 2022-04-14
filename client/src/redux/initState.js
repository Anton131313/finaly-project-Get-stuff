const initState = () => ({
  user: null,
  products: [],
  auction: [],
  search: [],
  comments: [],
  winner: {},
});

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  console.log(11111111111111, stateFromLS);
  return stateFromLS || initState();
};

// const getInitState = () => initState;

export default getInitState;
