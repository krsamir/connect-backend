import { Sequelize } from "sequelize";
import { Logger } from "connect-utils";
import { config } from "dotenv";
config();

const { log_database_connection, log_database_error } = Logger;
const { DATABASE, DATABASE_PORT, USER, PASSWORD, TIMEZONE } = process.env;
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: DATABASE_PORT,
  timezone: TIMEZONE,
});

try {
  await sequelize.authenticate();
  console.log(log_database_connection(3306));
} catch (error) {
  console.error(log_database_error(error));
}
export default sequelize;
