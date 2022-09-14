// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-Parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// get route
app.get("/getData", (req, res) => {
    res.send(projectData)
});

// post new data 
app.post("/savingData", (req, res) => {
    const data = req.body
    projectData.temp = data.main.temp
    projectData.name = data.name
    projectData.feelings = data.feelings
    projectData.weather = data.weather[0].main
    projectData.date = data.date

    res.status(200).json(data)
});

// Setup Server
const port = 5000;
app.listen(port, () => {
    console.log(`server is life on http://localhost:${port}`);
})