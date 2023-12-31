require('dotenv').config()
const express=require('express');
const morgan=require('morgan');
// const dataRoutes=require('./routes/dataRoutes')
// const userRoutes=require('./routes/user')
const mongoose=require('mongoose')
const app=express()

const admin = require("firebase-admin");

const serviceAccount = require("./authentication/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


mongoose.connect(process.env.MONGO_URI).then((result)=> {console.log('connected to db');
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
})}).catch((err)=> console.log(err))

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
// app.use('/api/user',userRoutes);
// app.use('/api/data',dataRoutes);