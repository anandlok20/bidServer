const mongoose = require('mongoose');
const validate = require('validator')
const teamSchema = mongoose.Schema({

    name: {
        type: String,
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

const teamModel = mongoose.model('team', teamSchema);

module.exports = teamModel;