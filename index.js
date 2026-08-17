const express=require('express')
const app=express();
const port=3000;

const connectDB=require('./db');
const users= require('./routes/users');



app.use(express.json());




app.get('/',(req,res)=>{
     
  res.send('Hello World');
});


app.get('/api',(req,res)=>{
     
  res.send('User API');
});


app.use('/api',users);

app.listen(port,async ()=>{
    try{
       await console.log(`Server is running....`)
       await connectDB();
    }
    catch(error){
        console.error('Error starting server:', error);
    }
});