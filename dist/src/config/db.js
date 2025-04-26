"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const example_model_1 = __importDefault(require("../model/example.model"));
const env_1 = require("./env");
const sequelize = new sequelize_typescript_1.Sequelize(env_1.AppEnv.MYSQL_DATABASE, env_1.AppEnv.MYSQL_USER, env_1.AppEnv.MYSQL_PASSWORD, {
    host: env_1.AppEnv.MYSQL_HOST,
    dialect: "mysql",
    port: Number(env_1.AppEnv.MYSQL_PORT),
    logging: false,
    models: [example_model_1.default],
});
exports.default = sequelize;
