import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";
import { productRouter } from "./routes/product";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error";
import { authRouter } from "./routes/auth";

dotenv.config({ path: "./config/config.env" });

connectToDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/user", authRouter);
app.use("/api/v1/products", productRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server running at ${PORT}`));

process.on("unhandledRejection", (err: any, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit(1));
});
