const express = require('express');
const { Sighting } = require('../models/SightingModel');
const router = express.Router();

// Find all sightings in the DB
router.get("/", async(request, response) => {
    let result = await Sighting.find().populate('user pets', "-password");

    response.json({
        sightings: result
    })
})

router.get("/search/:location", async(request, response) =>{
    let result = await Sighting.find({location: request.params.location}).populate('user pets', "-password");
    response.json({
        sightings: result
    })
})

// create a new sighting in the db
router.post("/", async(request, response) =>{
    let result = await Sighting.create(request.body).catch(error => {return error});
    result = await result.populate('pets');
    result = await result.populate('user', "username");

    response.json({
        sightings: result
    })
})

module.exports = router;