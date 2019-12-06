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
        required: true
    },
    playerType: {
        type: Array,
    },
    playerImages: {
        type: Blob
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