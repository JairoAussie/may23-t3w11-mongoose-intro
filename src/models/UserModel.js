const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false // attributes are not unique by default
    }
})

// const ModelName = mongoose.model('Name that appears in MongoDB(local or Atlas)', SchemaThatModelIsBasedOn)
const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}