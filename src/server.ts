import { json, Request, Response } from "express";
import express from "express";

const app = express();

app.use(json());
app.get("/", (req: Request, res: Response) => {
  console.log("Server is runnin");
  res.status(200).json({
    message: "Hi",
  });
});

export default app;
