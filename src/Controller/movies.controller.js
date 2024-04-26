import { MoviesService } from "../Services/movies.service.js";

export class MoviesController {
  constructor() {
    this.moviesService = new MoviesService();
  }

  async getAllMovies(req, res) {
    try {
      const movies = await this.moviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      const movie = req.body;
      const newMovie = await this.moviesService.createMovie(movie);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMovieByTitle(req, res) {
    try {
      const title = req.params.title;
      const movie = await this.moviesService.getMovieByTitle(title);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMovieById(req, res) {
    try {
      const id = req.params.id;
      const movie = req.body;
      const updatedMovie = await this.moviesService.updateMovieById(id, movie);
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMovieById(req, res) {
    try {
      const id = req.params.id;
      await this.moviesService.deleteMovieById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
