import axios from 'axios';
import { addProduct } from '../actions/productsAction';

export const ProductsThunk = (formData) => (dispatch) => {
  console.log(111, formData);
  axios.post('http://localhost:3001/addBidding', { formData })
    .then((res) => dispatch(addProduct(res.data)));
};
