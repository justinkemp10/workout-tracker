const router = require("express").Router();
const Workout = require("../models/Workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id, 
    {$push:{exercises:req.body}},
    {new:true, runValidators: true}  
  )
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbStats => {
      res.json(dbStats);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
