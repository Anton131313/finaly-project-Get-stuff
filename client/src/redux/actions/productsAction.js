import { ALL_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../types/productTypes';

export const allProducts = (products) => ({
  type: ALL_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const myProducts = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});
