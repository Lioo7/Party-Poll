const mongoose = require('mongoose');

const gameRoomSchema = new mongoose.Schema({
    pin: {
        type: Number,
        required: true,
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

const gameRoom = mongoose.model('GameRoom', gameRoomSchema);

module.exports = gameRoom;
