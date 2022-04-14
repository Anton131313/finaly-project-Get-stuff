const { Router } = require('express');
const { getWinner } = require('../controllers/getWinner.controller');

const winnerRouter = Router();

winnerRouter.get('/:id', getWinner);

module.exports = winnerRouter;
