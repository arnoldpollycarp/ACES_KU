require("dotenv").config();
const mongoose = require("mongoose");
const { app } = require("./app");
const { checkEnv } = require("./checkEnv");

const start = async () => {
  const port = process.env.APP_PORT || 8000;
  // check env variables
  await checkEnv();
  // db connection
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("database not connected", err);
  }
  //   start app
  app.listen(port, () => console.log(`Server is running on port ${port}`));
};

start();
