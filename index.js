// Quotes app (backend)
const dotenv = require('dotenv'); // Importing the dotenv package
dotenv.config(); // Configuring dotenv
const express = require('express'); // Importing express
const quotesRoutes = require('./routes/quotes.routes.js'); // Importing the "quotes.routes.js"
const database = require('./configurations/databaseConnect.js'); // Importing the database connecting function
const cors = require("cors");

const app = express(); // Creating express app

database(); // Establishing the DB-connection

// Adding middlwares
app.use(cors())// Using cors()
app.use(express.json()); // Using express.json() midleware function for parsing incoming requests into JSON payloads

// For welcome text
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Quotes application");
})

app.use(quotesRoutes); // Using the quotesRoutes 

// Listening to the app
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`)
});
