const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./src/dbconnection");
const PORT = 2929;
const MenRanking = require("./src/models/mens");

app.use(cors());
app.use(express.json());
//post to data base
app.post("/mens", async (req, res) => {
  try {
    const addingData = new MenRanking(req.body);
    console.log(req.body)
    await addingData.save();
    res.status(201).json(addingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// read from data base
app.get("/mens", async (req, res) => {
  try {
   const readData =  await MenRanking.find({})
    res.status(200).json(readData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// read from data base individual
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
   const readDa =  await MenRanking.findById({_id})
    res.status(200).json(readDa);
  } catch (err) {
    res.status(400).json(err);
  }
});
// read from data base individual update
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
   const readDa =  await MenRanking.findByIdAndUpdate(_id,req.body,{
     new:true
   })
    res.status(200).json(readDa);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get("/", async (req, res) => {
  res.send("Bismillah is big");
});

app.listen(process.env.PORT || PORT);
