const mongoose = require('mongoose');

/**
 * connect or create & connect to a database
 */

async function databaseConnect(){
    try{
        //DB connection can take some time, especially if the DB is in the cloud
        await mongoose.connect('mongodb://localhost:27017/PetDB');
        console.log("Database connected");
    } catch (error) {
        console.warn(`database connection failed: ${JSON.stringify(error)}`)
    }
}

module.exports = {
    databaseConnect
}