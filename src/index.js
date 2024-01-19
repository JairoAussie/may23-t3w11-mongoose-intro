//Configure .env so we can use it all around
require('dotenv').config();

const { databaseConnect } = require('./database')
const {app} = require('./server');

app.listen(3000, async () =>{
    await databaseConnect();
    console.log("Server running...");
})