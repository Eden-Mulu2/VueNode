const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

// Middleware to parse JSON request bodies
app.use(bodyParser.json());


// Enable CORS for all routes or specify specific origins
app.use(cors()); // This allows requests from all origins



// Import the necessary modules
const mongoose = require('mongoose');


// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other user properties as needed
});

// Create the User model based on the schema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;



// Define a route to create a user
app.post('/api/createUser', async (req, res) => {
    try {
      const { user } = req.body; // Extract the 'user' object from the request body
      if (!user || !user.firstName || !user.lastName || !user.email) {
        return res.status(400).json({ error: 'Invalid user data' });
      }

      // Create a new user in your database (replace with your database logic)
      const createdUser = await UserModel.create(user);

      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create a user' });
    }
  });


// Define a route to get all users
app.get('/api/users', async (req, res) => {
    try {
      // Fetch all users from your database (replace with your database logic)
      const users = await UserModel.find();
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
