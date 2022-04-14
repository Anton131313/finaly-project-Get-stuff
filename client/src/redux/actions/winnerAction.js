import { GET_WINNER } from '../types/userTypes';

export const getWinner = (winner) => ({
  type: GET_WINNER,
  payload: winner,
});
