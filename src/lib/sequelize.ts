import dotenv from "dotenv";
import { ConnectionTimedOutError, Sequelize } from "sequelize";

dotenv.config();

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;
const database = process.env.DATABASE as string;
const host = process.env.HOST as string;
const port = process.env.MYSQL_PORT as unknown as number;
// https://dotabase.dillerm.io/vpk

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  dialectOptions: {
    connectTimeout: 10000,
  },
});

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection is good");
  } catch (error) {
    console.error("Connection is not good:", error);
  }
};

authenticateDatabase();

export default sequelize;
