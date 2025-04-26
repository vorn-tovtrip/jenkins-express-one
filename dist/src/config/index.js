"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConfig = void 0;
exports.mysqlConfig = {
    dialect: "mysql",
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
};
