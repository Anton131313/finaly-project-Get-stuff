import axios from 'axios';
import { addProduct, allProducts } from '../actions/productsAction';

// const config = {
//   headers: { 'content-type': 'multipart/form-data' },
// };

export const AddProductThunk = (formData) => (dispatch) => {
  console.log(111, formData);
  axios.post('http://localhost:3001/addBidding', formData)
    .then((res) => dispatch(addProduct(res.data)));
};

export const getAllProductsFromDB = () => (dispatch) => {
  axios.get('http://localhost:3001/allProducts')
    // .then((response) => console.log(3333, response.data));
    .then((res) => dispatch(allProducts(res.data)));
};

// export const deleteProductFromDB = (id) => (dispatch) => {
//   axios.get('http://localhost:3001/allProducts')
//     // .then((response) => console.log(response.data));
//     .then((res) => dispatch(deleteProduct(id)));
// };
