import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectMongoDb from "./config/db.js";
import indexRouter from "./routes/index.js";
import http from "http";

dotenv.config({env: ".env"});
const app = express();

const PORT = process.env.PORT;
connectMongoDb();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

// routes
app.use(`/api`, indexRouter);

console.log(process.env.PORT,"PORT");
const server = http.createServer(app);

server.listen(PORT, (err, res) => {
  if(err) {
    console.error("Error on Creating Server", err);
  }
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => console.error("Unhandled Rejection", err));