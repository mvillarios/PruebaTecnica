import express from "express";
import notifications from "./routes/notifications";

const app = express();

app.use(express.json());

app.use("/notifications", notifications);

export default app;
