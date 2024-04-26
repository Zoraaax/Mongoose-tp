import { MoviesController } from "../Controller/movies.controller.js";

export const moviesRoutes = (app) => {
  const moviesController = new MoviesController();

  app.get("/", moviesController.getAllMovies.bind(moviesController));
  app.post("/create", moviesController.createMovie.bind(moviesController));
  app.get("/:title", moviesController.getMovieByTitle.bind(moviesController));
  app.put("/:id", moviesController.updateMovieById.bind(moviesController));
  app.delete("/:id", moviesController.deleteMovieById.bind(moviesController));
};
