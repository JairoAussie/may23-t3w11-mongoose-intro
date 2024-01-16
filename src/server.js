//Server configuration happens in server.js

const express = require('express');

// make a server instance
const app = express();

app.get("/", (request, response) => {
    response.json({
        message: "Hello world"
    });
});

module.exports = {
    app
}