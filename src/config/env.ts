import dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });
export const AppEnv = {
  MYSQL_DATABASE: process.env.MYSQL_DATABASE!,
  MYSQL_USER: process.env.MYSQL_USER!,
  MYSQL_PASSWORD: process.env.PASSWORD_SQL!,
  MYSQL_HOST: process.env.MYSQL_HOST!,
  MYSQL_PORT: Number(process.env.MYSQL_PORT || 3306),
  SERVERPORT: Number(process.env.SERVERPORT || 3000),
};
