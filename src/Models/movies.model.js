import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: String,
  description: String,
  director: String,
  releaseDate: Date,
});

const Movies = mongoose.model("Movies", moviesSchema);

export default Movies;
