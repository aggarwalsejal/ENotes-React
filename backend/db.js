const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://$DATASOURCE_USERNAME:$DATASOURCE_PASSWORD@cluster0.mmejmaq.mongodb.net/";

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
