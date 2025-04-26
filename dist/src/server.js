"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const middleware_1 = require("./middleware");
const routes_1 = __importDefault(require("./routes"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const createAppServer = () => {
    const app = (0, express_1.default)();
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
    app.use(express_1.default.json());
    const globalRateLimit = (0, express_rate_limit_1.rateLimit)({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
        message: {
            status: 429,
            message: "Too many requests, please try again later.",
        },
    });
    app.use(middleware_1.loggerMiddleware, middleware_1.corsMiddleware, (0, morgan_1.default)("dev"));
    app.use(globalRateLimit);
    app.get("/", (req, res) => {
        console.log("Server is runnin");
        return res.redirect("https://expressjs.com/");
    });
    app.use("/api/v1/", routes_1.default);
    app.use(middleware_1.notFoundMiddleWare);
    app.use(middleware_1.catchAllErrorMiddleware);
    return app;
};
exports.default = createAppServer;
