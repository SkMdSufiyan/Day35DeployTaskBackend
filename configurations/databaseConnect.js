const mongoose = require('mongoose'); // Importing mongoose

// Function to establish database connection
const database = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL); // DATABASE_URL is environment variable
        console.log('DB connection established');
    }catch(error){
        console.log('Error:', error.message);
    }
}

module.exports = database;
