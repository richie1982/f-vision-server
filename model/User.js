const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text: String,
})

const userSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    email: String,
    telephone: { type: Number, default: undefined },
    dateOfBirth: { type: Date, default: undefined },
    gender: { type: String, default: undefined},
    comment: { type: String, default: undefined },
})

module.exports = mongoose.model('User', userSchema)