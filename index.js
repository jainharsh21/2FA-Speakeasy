const express = require("express");
const speakeasy = require("speakeasy");
const uuid = require("uuid");
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const app = express();

// init db
const db = new JsonDB(new Config("myDatabase", true, false, "/"));

app.get("/api", (req, res) => res.json({ message: "Two Factor Auth" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on  http://localhost:${PORT}/`)
);
