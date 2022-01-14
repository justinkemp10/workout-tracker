const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    type: {
        type: String,
        required: "Enter an exercise"
    },
    weight: {
        type: Number,
        default: 0,
    },
    sets: {
        type: Number,
        default: 0,
    },
    reps: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,
        default: 0,
    },
    distance: {
        type: Number,
        default: 0,
    },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;