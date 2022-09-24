const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: "mysql",
    port: 3306,
    database: 'j8gu2vbsy6v0ywnn'
  }
);

module.exports = sequelize;
