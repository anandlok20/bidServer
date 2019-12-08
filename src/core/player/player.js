const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    status: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    playerType: {
        type: Array,
    },
    playerImages: {
        type: String
    },
    baseValue: {
        type: Number
    },
    sellPrice: {
        type: Number
    }
})

const Player = mongoose.model('Player', playerSchema)
module.exports = Player