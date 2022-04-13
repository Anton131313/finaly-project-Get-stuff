const initState = {
  user: null,
  products: [],
  auction: [],
  search: [],
  comments: [],
  price: '',
};

const getInitState = () => {
  // const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
  // return stateFromLS || initState;
  return initState;
}
export default getInitState;
