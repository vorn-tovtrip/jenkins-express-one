import express, { json, Request, Response } from "express";
import morgan from "morgan";
import {
  catchAllErrorMiddleware,
  corsMiddleware,
  loggerMiddleware,
  notFoundMiddleWare,
} from "./middleware";
import mainRoute from "./routes";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const createAppServer = () => {
  const app = express();
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  app.use(express.json());
  const globalRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    message: {
      status: 429,
      message: "Too many requests, please try again later.",
    },
  });

  app.use(loggerMiddleware, corsMiddleware, morgan("dev"));
  app.use(globalRateLimit);
  app.get("/", (req: Request, res: Response) => {
    console.log("Server is runnin");
    return res.redirect("https://expressjs.com/");
  });
  app.use("/api/v1/", mainRoute);
  app.use(notFoundMiddleWare);
  app.use(catchAllErrorMiddleware);
  return app;
};

export default createAppServer;
