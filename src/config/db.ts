import { Sequelize } from "sequelize-typescript";
import Example from "../model/example.model";
import { AppEnv } from "./env";
const sequelize = new Sequelize(
  AppEnv.MYSQL_DATABASE,
  AppEnv.MYSQL_USER,
  AppEnv.MYSQL_PASSWORD,
  {
    host: AppEnv.MYSQL_HOST,
    dialect: "mysql",
    port: Number(AppEnv.MYSQL_PORT),
    logging: false,
    models: [Example],
  }
);

export default sequelize;
