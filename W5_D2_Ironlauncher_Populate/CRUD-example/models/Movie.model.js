const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: String,
    director: String,
    duration: String,
    genre: [String],
    rate: String
});

let Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;