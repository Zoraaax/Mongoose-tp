import { MoviesRepository } from "../Repository/movies.repository.js";

export class MoviesService {
  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  async getAllMovies() {
    return await this.moviesRepository.getAllMovies();
  }

  async createMovie(movie) {
    if (!movie) {
      throw new Error("Merci de renseigner un film");
    } else {
      return await this.moviesRepository.createMovie(movie);
    }
  }

  async getMovieByTitle(title) {
    if (!title) throw new Error("Merci de renseigner un titre de film valide");
    return await this.moviesRepository.getMovieByTitle(title);
  }

  async updateMovieById(id, movie) {
    if (!id) throw new Error("Merci de renseigner un id de film valide");
    return await this.moviesRepository.updateMovieById(id, movie);
  }

  async deleteMovieById(id) {
    if (!id) throw new Error("Merci de renseigner un id de film valide");
    return await this.moviesRepository.deleteMovieById(id);
  }
}
