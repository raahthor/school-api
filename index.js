import dotenv from "dotenv";
dotenv.config();
import router from "./routes/routes.js";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

// db connection function

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  if (process.env.NODE_ENV !== "production")
    console.log("server running on port:", port);
});
