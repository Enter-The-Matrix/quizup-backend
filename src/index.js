import dotenv from "dotenv";
import { app } from "./app.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";

dotenv.config({
  path: "/.env",
});

const PORT = process.env.PORT || 8000;

connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running on port:", PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB db connection failed!", error);
  });
