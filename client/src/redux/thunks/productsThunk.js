import axios from 'axios';
import { addProduct, allProducts, deleteProduct } from '../actions/productsAction';
import { getWinner } from '../actions/winnerAction';

const { REACT_APP_HOST: host } = process.env;

export const AddProductThunk = (formData) => (dispatch) => {
  console.log(111, formData);
  axios.post(`${host}/bidding`, formData)
  // .then((res) => console.log(88888888, res.data));
    .then((res) => dispatch(addProduct(res.data)));
};

export const getAllProductsFromDB = () => (dispatch) => {
  axios.get(`${host}/allProducts`)
    // .then((response) => console.log(3333, response.data));
    .then((res) => dispatch(allProducts(res.data)));
};

export const deleteProductFromDB = (id) => (dispatch) => {
  axios.delete(`${host}/bidding/${id}`)
    // .then((response) => console.log(response.data));
    .then(() => dispatch(deleteProduct(id)));
};

export const getWinnerFromDB = (id) => (dispatch) => {
  dispatch(getWinner({ name: 'Inga' }));
  // axios.get(`${host}/winner/${id}`)
  //   .then((res) => dispatch(getWinner(res.data)));
};
