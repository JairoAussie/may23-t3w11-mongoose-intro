const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SightingSchema = new Schema({
    location: {
        type: String,
        required: true,
        unique: false
    }, 
    time: {
        type: Date,
        default: new Date(Date.now())
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    // pet: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Pet'
    // }
    pets: [{
        type: mongoose.Types.ObjectId,
        ref: 'Pet'
    }]
})

const Sighting = mongoose.model('Sighting', SightingSchema);

module.exports = {
    Sighting
}