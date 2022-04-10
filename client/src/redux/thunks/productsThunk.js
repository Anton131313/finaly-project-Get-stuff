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

// export const getAllProductsFromDB = () => (dispatch) => {
//   axios.get('http://localhost:3001/allProducts')
//     .then((res) => dispatch(allProducts(res.data))),
// };
