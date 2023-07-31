const mongoose = require('mongoose'); // Importing mongoose

// Creating a new schema everytime
const quoteSchema = new mongoose.Schema({
    // Fields that the new entry should contain
    quote:{
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    created_date : {
        type : String,
        required : true
    },
    category : {
        type : String,
        default : "Life"
    }
});

module.exports = mongoose.model("Quotes", quoteSchema); // Creating and exporting a quotes model