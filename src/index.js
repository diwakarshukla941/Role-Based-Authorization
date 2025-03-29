const express = require('express');
const dotenv = require("dotenv").config();
const {dbConnect} = require("../src/config/dbConnnect")
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
dbConnect();
const app = express();

// middleware
app.use(express.json());


// Routes
app.use('/api/auth',authRoutes)
app.use('/api/user', userRoutes)

// start the server

const PORT = process.env.PORT   || 8008 ;
app.listen(PORT, () =>{
    console.log(`the server is running on ${PORT}`);
})