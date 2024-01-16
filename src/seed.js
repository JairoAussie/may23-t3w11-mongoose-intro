const mongoose = require('mongoose');
const {databaseConnect} = require('./database');

databaseConnect().then( async ()=>{
    console.log("creating seed data!");

    const Pet = mongoose.model('Pet', {
        name: String,
        type: String,
        breed: String,
        gender: String,
        age: Number,//integer
        weightKg: Number, //float / decimal
        safeToPet: Boolean,
        photos: [String], //URL to some file storage like AWS S3, Google Cloud, Azure, Cloudinary, etc.
        favouriteToys: [String],
        favourtitePlacesToSit: [String]
    });

    let newDog = new Pet({
        name: "Gracie",
        type: "Dog",
        breed: "Labrador",
        gender: "Female",
        age: 3,//integer
        weightKg: 32, //float / decimal
        safeToPet: true,
        photos: ["wwww.google.com", "www.yahoo.com"], //URL to some file storage like AWS S3, Google Cloud, Azure, Cloudinary, etc.
        favouriteToys: ["squeeky", "rope"],
        favourtitePlacesToSit: ["tree", "pool", "couch", "bed"]
    })

    await newDog.save().then(()=>{
        console.log(`${newDog.name} is in the DB!`);
    })
});