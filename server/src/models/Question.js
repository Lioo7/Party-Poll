const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    isDefaultQuestion: {
        type: Boolean,
        required: true,
    },
    questionText: {
        type: String,
        required: true,
        maxlength: 100,
    },
    isAdultContent: {
        type: Boolean,
        required: false,
    },
    votes: {
        type: Map,
        of: Number,
        default: {},
    },
    winnerName: {
        type: String,
    },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
