import fs from "fs";
import mysql from "mysql2";

export const local = {
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

let certificate;
try {
  certificate = fs.readFileSync("./config/scalegrid.pem");
} catch (error) {
  console.log("Error:", error);
}

export const scaleGrid = {
  host: "SG-mission6-3936-mysql-master.servers.mongodirector.com",
  user: "sgroot",
  password: "8_pBDt3A7dVXNlkF",
  database: "levelUpWorks",
  port: 3306,
  // ssl: { ca: certificate },
};

const db = mysql.createConnection(scaleGrid);

export default db;
