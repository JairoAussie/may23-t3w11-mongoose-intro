const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    }, 
    type: {
        type: String,
        required: true,
        unique: false
    }, 
    breed: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    weightKg: {
        type: Number
    },
    safeToPet: {
        type: Boolean,
        required: true
    },
    photos: {
        type: [String]
    },
    favouriteToys: {
        type: [String]
    },
    favouritePlacesToSit: {
        type: [String]
    }
})

const Pet = mongoose.model('Pet', PetSchema);

module.exports = {
    Pet
}
// const Pet = mongoose.model('Pet', {
//     name: String,
//     type: String,
//     breed: String,
//     gender: String,
//     age: Number,//integer
//     weightKg: Number, //float / decimal
//     safeToPet: Boolean,
//     photos: [String], //URL to some file storage like AWS S3, Google Cloud, Azure, Cloudinary, etc.
//     favouriteToys: [String],
//     favourtitePlacesToSit: [String]
// });