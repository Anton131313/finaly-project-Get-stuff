import axios from 'axios';
import { addProduct, allProducts, deleteProduct } from '../actions/productsAction';

const { REACT_APP_HOST: host } = process.env;

export const AddProductThunk = (formData) => (dispatch) => {
  console.log(111, formData);
  axios.post(`${host}/addBidding`, formData)
    .then((res) => dispatch(addProduct(res.data)));
};

export const getAllProductsFromDB = () => (dispatch) => {
  axios.get(`${host}/allProducts`)
    // .then((response) => console.log(3333, response.data));
    .then((res) => dispatch(allProducts(res.data)));
};

// export const getAllProductsFromDB = () => (dispatch) => {
//   axios.get(`${host}/myProducts`)
//     // .then((response) => console.log(3333, response.data));
//     .then((res) => dispatch(myProducts(res.data)));
// };

export const deleteProductFromDB = (id) => (dispatch) => {
  axios.get('http://localhost:3001/deleteBidding')
    // .then((response) => console.log(response.data));
    .then((res) => dispatch(deleteProduct(id)));
};
