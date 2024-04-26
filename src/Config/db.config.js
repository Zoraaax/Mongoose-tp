import mongoose from "mongoose";

const dbConfig = {
  url: "mongodb+srv://valentinthlt:mongodb@cluster0.u1buaqx.mongodb.net/",
  dbName: "tp3-mongoose",
};

mongoose.connect(`${dbConfig.url}${dbConfig.dbName}`);

const db = mongoose.connection;

export default db;
