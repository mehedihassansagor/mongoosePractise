const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./src/dbconnection");
const PORT = 2929;
const router = require("./src/routers/Men");

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  res.send("Bismillah is big");
});

app.listen(process.env.PORT || PORT);
