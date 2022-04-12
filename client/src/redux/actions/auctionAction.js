import axios from 'axios';
import * as config from '../../config/config';
import { SET_AUCTION } from '../types/auctionTypes';

export const setAuction = (auction) => ({
  type: SET_AUCTION,
  payload: auction,
});

export const getAuctionData = (id) => async (dispatch) => {
  axios.get(`${config.getAuction(id.id)}`)
    .then((response) => dispatch(setAuction(response.data)));
};
