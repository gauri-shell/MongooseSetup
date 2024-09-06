const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
       await mongoose.connect("mongodb://userg:hello123@cluster0-shard-00-00.5rm6t.mongodb.net:27017,cluster0-shard-00-01.5rm6t.mongodb.net:27017,cluster0-shard-00-02.5rm6t.mongodb.net:27017/testdb?replicaSet=atlas-bsqozi-shard-0&ssl=true&authSource=admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
module.exports = connectDB;













