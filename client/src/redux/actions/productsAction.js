import { ALL_PRODUCTS, ADD_PRODUCT } from '../types/productTypes';

export const allProducts = (products) => ({
  type: ALL_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
