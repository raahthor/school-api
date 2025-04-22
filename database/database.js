import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
  dialectOptions: isProduction
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {},
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ alter: true });
    console.log("synced successfully");
  } catch (err) {
    console.error("database connection failed : ", err.message);
    process.exit(1);
  }
};

const startDB = async () => {
  try {
    await connectDB();
    console.log("database connected");
  } catch (error) {
    console.error("db not connected : ", error.message);
  }
};

export { sequelize, startDB };
