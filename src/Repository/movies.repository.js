import db from "../Config/db.config.js";
import Movies from "../Models/movies.model.js";

export class MoviesRepository {
  constructor() {
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => console.log("Connected to the database"));
  }

  async getAllMovies() {
    return await Movies.find();
  }

  async createMovie(movie) {
    return await Movies.create(movie);
  }

  async getMovieByTitle(title) {
    return await Movies.findOne({ title: title });
  }

  async updateMovieById(id, movie) {
    return await Movies.findByIdAndUpdate(id, movie, { new: true });
  }

  async deleteMovieById(id) {
    return await Movies.findByIdAndDelete(id);
  }
}
