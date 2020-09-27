const mongoose = require('../database');
const answerSchema = new mongoose.Schema({
    ageRange:{
        type: String,
        require: true
    },
    agreement:{
        type: String,
        require: true
    },
    salaryRange:{
        type: String,
        require: true
    },
    loanReason:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const answer = mongoose.model('answer', answerSchema);

module.exports = answer;