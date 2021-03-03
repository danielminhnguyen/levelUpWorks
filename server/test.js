import dotenv from "dotenv";

dotenv.config();
console.log(Buffer.from(process.env.MYSQL_CERT_BASE64, "base64").toString("ascii"));
