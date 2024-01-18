//Configure .env so we can use it all around
require('dotenv').config();

const {app} = require('./server');

app.listen(3000, () =>{
    console.log("Server running...")
})