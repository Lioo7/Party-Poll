const mongoose = require('mongoose');

const gameRoomSchema = new mongoose.Schema({
    pin: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                const parsedValue = parseInt(value);
                return Number.isInteger(parsedValue) && parsedValue > 0 && parsedValue.toString().length === 6;
            },
            message: 'Pin must be a positive integer with exactly 6 digits',
        },
    },
    name: {
        type: String,
        required: true,
    },
    users: {
        type: [String],
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }],
});

const GameRoom = mongoose.model('GameRoom', gameRoomSchema);

module.exports = GameRoom;
