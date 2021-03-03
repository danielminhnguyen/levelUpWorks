import fs from "fs";
import mysql from "mysql2";

export const local = {
  host: process.env.MYSQL_HOST_IP || "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "levelUpWorks",
};

let certificate;
try {
  certificate = fs.readFileSync("./config/scalegrid.pem");
} catch (error) {
  console.log("Error:", error);
}

export const scaleGrid = {
  host: "SG-missionx-3623-master.servers.mongodirector.com",
  user: "sgroot",
  password: "5bvKqZwknrCS-ghu",
  database: "missionx",
  port: 3306,
  ssl: { ca: certificate },
};

const db = mysql.createConnection(local);

export default db;
