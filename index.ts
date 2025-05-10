import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";
import { productRouter } from "./routes/product";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error";
import { authRouter } from "./routes/auth";
import { equipmentRouter } from "./routes/equipment";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./config/config.env" });

connectToDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.disable("etag");
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/user", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/equipments", equipmentRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server running at ${PORT}`));

process.on("unhandledRejection", (err: any, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit(1));
});
