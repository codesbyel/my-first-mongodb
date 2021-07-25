const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema and Model

const HarryPotterCharSchema = new Schema({
    name: String,
    dorm: String,
    score: Number
});

const HarryPotterChar = mongoose.model('harrypotterchar', HarryPotterCharSchema);


module.exports = HarryPotterChar;

