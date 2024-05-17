import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "socialpulse",
  dialect: "mysql",
  dialectModule: require("mysql2"),
  benchmark: true,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
})();

export default sequelize;