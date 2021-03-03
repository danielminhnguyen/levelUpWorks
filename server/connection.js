import fs from "fs";
import mysql from "mysql2";

export const local = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "missionx",
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

const db = mysql.createConnection(scaleGrid);

export default db;
