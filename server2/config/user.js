import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "expance",
    };
    mongoose.set("strictQuery", false);
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("Connect DB Succesfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
