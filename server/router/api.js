const express = require('express');
var bodyParser = require("body-parser");
const router = express.Router();

const UserModel = require('../Models/user');
const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/Authentication";

  // the first  methode to connected to data 
 /* const connection = (closure) => {
    return MongoClient.connect('db', (err, client) => {
        if (err) return console.log(err);
        let db = client.db('Authentication');
        closure(db);
    })
  }
  console.log('Connected to mangodb',connection);*/
  // the second methode to connected to data 
  mongoose.connect(db,err => {
      if(err){
          console.log(err);
      }
      else{
          console.log('Connected to ',db);
      }
  })


  router.get('/', (req,res) => {
res.send('This API from Router');
})

router.post('/register',(req,res) =>{
   let UserData = req.body;
   let Users = new UserModel(UserData);
   console.log(Users);
   Users.save((error,RegisterdUsers) =>{
    if(error){
        console.log(error);
    }
    else{
      
        res.status(200).send(RegisterdUsers);
    }
   })
})
module.exports = router