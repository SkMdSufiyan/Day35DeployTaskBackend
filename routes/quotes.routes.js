// This file is for handling the routes of the quotes app

const express = require('express'); // Importing express
// Importing the custom functions fromhe quotes.controller.js file
const {getAllQoutes, getQouteById, addQuote, updateQuote, deleteQuote} = require('../controllers/quotes.controller.js');

const qoutesRouter = express.Router(); // 

// GET - to retrieve all the quotes
qoutesRouter.get('/quotes', getAllQoutes);

// GET - To retrieve only one quote
qoutesRouter.get('/quotes/:quoteID', getQouteById)


// POST - to insert data
qoutesRouter.post('/quotes', addQuote);

// PUT - to update data
qoutesRouter.put('/quotes/:quoteID', updateQuote);

// DELETE - to delete a quote
qoutesRouter.delete('/quotes/:quoteID', deleteQuote);



module.exports = qoutesRouter;
