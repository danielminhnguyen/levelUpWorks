import dotenv from "dotenv";
dotenv.config();

export const API_URL = process.env.REACT_APP_API_SERVER_URL || "http://localhost:5000/";
