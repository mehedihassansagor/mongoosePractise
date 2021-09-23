const express = require('express');
const router = new express.Router();
const MenRanking = require('../models/mens')
//post to data base
router.post("/mens", async (req, res) => {
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
  router.get("/mens", async (req, res) => {
    try {
     const readData =  await MenRanking.find({}).sort({"ranking":1});
      res.status(200).json(readData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // read from data base individual
  router.get("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
     const readDa =  await MenRanking.findById({_id})
      res.status(200).json(readDa);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  // read from data base individual update
  router.patch("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
     const readDa =  await MenRanking.findByIdAndUpdate(_id,req.body,{
       new:true
     })
      res.status(200).json(readDa);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // read from data base individual delete
  router.delete("/mens/:id", async (req, res) => {
    try {
      const _id = req.params.id;
     const readDa =  await MenRanking.findByIdAndDelete(_id)
      res.status(200).json(readDa);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;