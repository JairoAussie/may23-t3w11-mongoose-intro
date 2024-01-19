require('dotenv').config();

const mongoose = require('mongoose');
const {databaseConnect} = require('./database');
const {Pet} = require('./models/PetModel')

databaseConnect().then( async ()=>{
    console.log("creating seed data!");

    let newDog = new Pet({
        name: "Daisy",
        type: "Dog",
        breed: "Labrador",
        colour: "white",
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
}).then(async ()=> {
    //dbDisconnect function()
    // await disconnect()
})