const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
//connect to database

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected at: ${String(conn.connection)}`);
  } catch (error) {
    console.log(error.message);
    // throw error;
  }
}
module.exports = connectDB;



// const { MongoClient, ServerApiVersion } = require('mongodb');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectDB() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
module.exports = connectDB;
