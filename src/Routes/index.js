import { moviesRoutes } from "./movies.route.js";

export const Routes = (app) => {
  app.use("/movies", moviesRoutes);
};
