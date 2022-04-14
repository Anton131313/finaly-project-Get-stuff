import axios from 'axios';
import * as config from '../../config/config';
import {
  CREATE_PRICE, SET_AUCTION,
} from '../types/auctionTypes';

export const setAuction = (auction) => ({
  type: SET_AUCTION,
  payload: auction,
});

export const getAuctionData = (id) => async (dispatch) => {
  // console.log('111111111111111111111111');
  axios.get(`${config.getAuction(id.id)}`)
    .then((response) => {
      // console.log(response);
      dispatch(setAuction(response.data));
    });
};

// export const setComments = (comments) => ({
//   type: SET_COMMENTS,
//   payload: comments,
// });

// export const getCommentsData = (id) => async (dispatch) => {
//   axios.get(`${config.getComments(id.id)}`)
//     .then((response) => dispatch(setComments(response.data)));
// };

// export const createComment = (input) => ({
//   type: CREATE_COMMENTS,
//   payload: input,
// });

// export const createCommentData = (id, payload) => async (dispatch) => {
//   axios.post(`${config.addComments(id.id)}`, payload)
//     .then((response) => dispatch(createComment(response.data)));
// };

export const createPrice = (data) => ({
  type: CREATE_PRICE,
  payload: data,
});

export const createPriceData = (id, payload) => async (dispatch) => {
  axios.post(`${config.addPrice(id.id)}`, payload)
    .then((response) => {
      dispatch(createPrice(response.data));
    });
};
