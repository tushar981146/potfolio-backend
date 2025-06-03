// Core Module
const path = require('path');


require('dotenv').config()

// External Module
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db_path = process.env.DB_PATH;



//Local Module
const formDataRouters = require('./routers/formDataRouters');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("page is working");
});

app.use('/form', formDataRouters);

const PORT = process.env.PORT || 3000;

mongoose.connect(db_path).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
