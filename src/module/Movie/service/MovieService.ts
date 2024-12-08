import { MovieRepository } from '../repository/MovieRepository.js';

export class MovieService {
    public async getAvgRateFromEachMovie() {
        const movieRepository = new MovieRepository();
        return await movieRepository.getAllAvgRateFromEachMovie();
    }
}
