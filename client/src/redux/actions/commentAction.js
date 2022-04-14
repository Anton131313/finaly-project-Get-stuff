import axios from 'axios';
import * as config from '../../config/config';
import {
  CREATE_COMMENTS, SET_COMMENTS,
} from '../types/auctionTypes';

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
    .then((response) => {
      dispatch(createComment(response.data));
    });
};
