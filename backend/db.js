const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://sejal:123456Qq@atlascluster.wctf8cb.mongodb.net/";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI, () => {
      console.log("Connected to Mongo Successfully");
    });
  } catch (error) {
    console.log("error");
  }
};

module.exports = connectToMongo;
