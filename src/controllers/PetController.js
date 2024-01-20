const express = require('express');
const router = express.Router();
const { Pet } = require('../models/PetModel');

// Find all pets in the DB
router.get("/all", async (request, response) => {
    let result = await Pet.find();

    response.json({
        pets: result
    });
})

// Finds one pet by its id
router.get("/:id", async(request, response) => {
    let result = await Pet.findById(request.params.id).catch(error => {return "Id not found"});

    response.json({
        pet: result
    });
})

// Find one pet by its name
router.get("/search/name/:name", async(request, response) => {
    //console.log(request.params.name);
    let result = await Pet.find({name: request.params.name});

    response.json({
        pets: result
    });
})

// find all the pets of the same type
router.get("/search/type/:type", async(request, response) => {
    let result = null;

    response.json({
        pet: result
    });
})

//Create a new pet in the DB
//POST localhost:3000/pets/
router.post("/", async(request, response)=>{

    /*
    try{
        let result = await Pet.create(request.body);
    } catch(error){
        result = error,
    }
    */
    // Error honadling vie Promise.catch()
    let result = await Pet.create(request.body).catch(error => {return error});

    response.json({
        pet: result
    })
})

//find a pet by id and update it
// we need the id, but also the attributes to be updated
router.patch("/:id", async (request, response) => {
    let result = await Pet.findByIdAndUpdate(
        request.params.id,
        request.body,
        {
            returnDocument: "after",
            upster: true
        }
    ).catch(error => {return error})

    response.json({
        updatedPet: result
    })
})

// find a pet by id and delete it
router.delete("/:id", async (request, response) => {
    let result = await Pet.findByIdAndDelete(request.params.id).catch(error => {return "Pet id not found"});
    response.json({
        deletedPet: result
    })
})


module.exports = router;