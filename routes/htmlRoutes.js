const router = require("express").Router();
const Html = require("../models/index");
const path = require('path');

router.get("/", (req, res) => {
  Html.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html')); 
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html')); 
});

module.exports = router;
