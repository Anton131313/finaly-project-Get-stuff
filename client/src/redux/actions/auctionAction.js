import axios from 'axios';
import * as config from '../../config/config';
import { CREATE_COMMENTS, SET_AUCTION, SET_COMMENTS } from '../types/auctionTypes';

export const setAuction = (auction) => ({
  type: SET_AUCTION,
  payload: auction,
});

export const getAuctionData = (id) => async (dispatch) => {
  console.log('uUUuuuuUUUUUUUUUUU111111', id.id);
  axios.get(`${config.getAuction(id.id)}`)
    .then((response) => {
      // navigate(`/bidding/${id.id}`);
      console.log(response.data, 'uUUuuuuUUUUUUUUUUU');
      dispatch(setAuction(response.data));
    });
};

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const getCommentsData = (id) => async (dispatch) => {
  axios.get(`${config.getComments(id.id)}`)
    .then((response) => dispatch(setComments(response.data)));
};

export const createComment = (input) => ({
  type: CREATE_COMMENTS,
  payload: input,
});

export const createCommentData = (id, payload) => async (dispatch) => {
  axios.post(`${config.addComments(id.id)}`, payload)
    .then((response) => dispatch(createComment(response.data)));
};

export const createPrice = (data) => ({
  type: CREATE_COMMENTS,
  payload: data,
});

export const createPriceData = (id, payload) => async (dispatch) => {
  console.log(payload, '<<<<<<<<<<');
  axios.post(`${config.addPrice(id.id)}`, payload)
    .then((response) => {
      console.log(22222222, response.data);
      dispatch(createPrice(response.data));
    });
};
