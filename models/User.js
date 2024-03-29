const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    role: {type: String, default: "member"},
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);