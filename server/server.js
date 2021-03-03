import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import projectRouter from "./routes/projectRouter.js";
import port from "./config/index.js";
import { connect } from "./db/index.js";
import { allowCORS } from "./middlewares/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.all("/*", allowCORS); // A middleware to allow all CORS requests

app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/projects", projectRouter);

const startServer = async () => {
  try {
    await connect();
    app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
  } catch (e) {
    console.error(e);
  }
};

startServer();
