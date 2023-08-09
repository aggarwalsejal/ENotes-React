const mongoose = require("mongoose");
const mongoURI ="mongodb+srv://$mongo_username:$mongo_password@atlascluster.wctf8cb.mongodb.net/";

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
