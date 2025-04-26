"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./src/config/db"));
const env_1 = require("./src/config/env");
const server_1 = __importDefault(require("./src/server"));
const app = (0, server_1.default)();
const dbconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
const server = app.listen(env_1.AppEnv.SERVERPORT, () => __awaiter(void 0, void 0, void 0, function* () {
    // dbconnect();
    console.log("Welcome to express is startings");
}));
server.on("connect", (req) => {
    console.log("Express js server is up running");
});
server.on("close", () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.close();
    console.log("Express js server is shutting down");
}));
exports.default = server;
