import express from "express";

export const app = express();

import dotenv from "dotenv";

dotenv.config({
  path: "./data/config.env",
});
