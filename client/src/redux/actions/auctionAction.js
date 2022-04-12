import axios from 'axios';
import * as config from '../../config/config';
import { CREATE_COMMENTS, SET_AUCTION, SET_COMMENTS } from '../types/auctionTypes';

export const setAuction = (auction) => ({
  type: SET_AUCTION,
  payload: auction,
});

export const getAuctionData = (id) => async (dispatch) => {
  axios.get(`${config.getAuction(id.id)}`)
    .then((response) => dispatch(setAuction(response.data)));
};

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const getCommentsData = (id) => async (dispatch) => {
  axios.get(`${config.getComments(id.id)}`)
    .then((response) => dispatch(setComments(response.data)));
};

export const createComment = (comment) => ({
  type: CREATE_COMMENTS,
  payload: comment,
});

export const createCommentData = (id, payload) => async (dispatch) => {
  console.log(payload, '<<<<<<<<<<');
  axios.post(`${config.addComments(id.id)}`, payload)
    .then((response) => dispatch(createComment(response.data)));
};
