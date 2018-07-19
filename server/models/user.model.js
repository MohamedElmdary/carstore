const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date().getTime()
    }
});

mongoose.model("user", user);