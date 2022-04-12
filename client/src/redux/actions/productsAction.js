import {
  ALL_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, FIND_CARDS, FIND_CARDS_SAGA,
} from '../types/productTypes';

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

export const findProducts = (products) => ({
  type: FIND_CARDS,
  payload: products,
});

export const findProductsSaga = (input) => ({
  type: FIND_CARDS_SAGA,
  payload: input,
});
