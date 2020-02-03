const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({
    name: String,
    subname: String,
    email: String,
    password: String,
    role: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);
