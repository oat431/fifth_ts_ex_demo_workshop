import { Request, Response } from 'express';
import { MovieService } from '../service/MovieService.js';

export class MovieController {
    public async getAvgRateFromEachMovie(req: Request, res: Response) {
        const movieService = new MovieService();
        const result = await movieService.getAvgRateFromEachMovie();
        res.status(200).json(result);
    }
}
