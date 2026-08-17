const express = require('express');
const router = express.Router();
const User = require('../models/usermodel')
// const connectDB = require('../db');
const mongoose = require('mongoose');

const app=express();
// connectDB();
// GET all users: GET request to /users
 
router.get('/users', async (req, res) => {
 
  try {
    console.log('Fetching all users...');
    const users = await User.find();
    res.status(200).json(users);
  } 
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//POST a new user: POST request to /users
router.post('/users', async (req, res) => {
  
  try{

    const info=req.body;
    const user =await User.create({
    name: info.name,
    age: info.age,
    dateCreated: info.dateCreated
  });
     
  res.status(201).json({ message: 'User created successfully' });
}
catch(err){
  res.status(400).json({ message: err.message });
}
}

);

module.exports = router;

