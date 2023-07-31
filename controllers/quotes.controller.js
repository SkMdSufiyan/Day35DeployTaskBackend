const QuotesModel = require('../models/quotes.model.js'); // Importing the quotes model

// For retrieving all the quotes (GET - find())
exports.getAllQoutes = (req, res) => {
    try{
        QuotesModel.find()
            .then((documents) => {
                if(documents.length===0){
                    res.status(200).send({message: "There are no quotes in the database. Add a quote.", data: documents})
                }else{
                    res.status(200).send({message : 'All the quotes are obtained successfully.', data : documents});
                }
            })
            .catch((err) => {
                res.status(400).send({message: 'Failed to retrieve quotes:', error: err});
            });

    }catch(error){
        res.status(500).send({message: "Internal server error", error: error});
    }
}


// For retrieving only one quote (GET - findOne())
exports.getQouteById = (req, res) => {
    try{
        QuotesModel.findOne({_id: req.params.quoteID})
        .then((document) => {
            res.status(200).send({message: `The quote with quoteID ${req.params.quoteID} is retrieved successfully.`, data: document}); 
        })
        .catch((err) => {
            res.status(400).send({message: `Qoute with id ${req.params.quoteID} does not exist.`, error: err});
        });

    }catch(error){
        res.status(500).send({message: "Internal server error", error: error});
    }
}


// For adding a quote (POST - save())
exports.addQuote = (req, res) => {
    try{
        const payload = req.body; // Taking the requset body

        // Adding a new quote
        const newQuote = new QuotesModel(payload); 
        newQuote.save()
            .then((result) => {
                res.status(200).send({message: "Qoute is added successfully.", data: result});
            })
            .catch((err) => {
                res.status(400).send({message: "Failed to add quote.", error: err});
            });
    }catch(error){
        res.status(500).send({message: "Internal server error.", error: error});
    }   
}


// For updating a quote (PUT - findOneAndUpdate())
exports.updateQuote = (req, res) => {
    try{
        const payload = req.body;
        
        QuotesModel.findOneAndUpdate({_id: req.params.quoteID},{$set: payload})
        .then((result) => {
            res.status(200).send({message:"Quote has been updated successfully."});
        })
        .catch((err) => {
            res.status(400).send({message: `Quote with id ${req.params.quoteID} does not exist.`, error: err});
        })
    }catch(error){
        res.status(500).send({message: "Internal server error.", error: error});
    }
    
}

// For deleting a quote (DELETE - findOneAndDelete())
exports.deleteQuote = (req, res) => {
    try{
        QuotesModel.findOneAndDelete({_id: req.params.quoteID})
        .then((deletedDocument) => {
            res.status(200).send({message: `Quote with id ${req.params.quoteID} has been deleted successfully.`, data: deletedDocument}); 
        })
        .catch((err) => {
            res.status(400).send({message: `Qoute with id ${req.params.quoteID} does not exist.`, error: err});
        })

    }catch(error){
        res.status(500).send({message: 'Internal server error.', error: error});
    }
}


