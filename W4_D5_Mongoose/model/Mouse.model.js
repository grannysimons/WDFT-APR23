const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mouseSchema = new Schema({
    color: {
        type: String,
        default: "gray",
        unique: true
    }, 
    enemy: {
        type: String,
        required: true,
        enum: ["cactus", "cat", "dog"]
    }
});

const Mouse = mongoose.model("Mouse", mouseSchema);

module.exports = Mouse;