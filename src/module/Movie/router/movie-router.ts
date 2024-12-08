import { Router } from 'express';
import { MovieController } from '../controller/MovieController.js';

const movieRouter = Router();
const movieController = new MovieController();

movieRouter.get('/movie', movieController.getAvgRateFromEachMovie);

export default movieRouter;
