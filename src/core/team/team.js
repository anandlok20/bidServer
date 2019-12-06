const mongoose = require('mongoose');
const validate = require('validator')
const eventchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    teamFund: {
        type: Number
    },
    players: {
        type: Array
    }
});

const eventModel = mongoose.model('event', eventchema);

module.exports = eventModel;