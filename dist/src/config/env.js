"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env.dev" });
exports.AppEnv = {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.PASSWORD_SQL,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: Number(process.env.MYSQL_PORT || 3306),
    SERVERPORT: Number(process.env.SERVERPORT || 3000),
};
