const router = require("express").Router();
const Html = require("../models/index");

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

module.exports = router;
