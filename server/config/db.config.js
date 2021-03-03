import dotenv from "dotenv";

dotenv.config();
const config = {
  host: process.env.MYSQL_HOST_IP || "localhost",
  database: process.env.MYSQL_DATABASE || "missionx",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT || 3306),
  // ssl: {
  //   ca: Buffer.from(process.env.MYSQL_CERT_BASE64, "base64").toString("ascii"),
  // },
};

export default config;
