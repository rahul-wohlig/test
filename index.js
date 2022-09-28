const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connection = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

connection();

//App Initialization
const app = express();

//Port Initialization
const port = process.env.PORT || 8000;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Api
app.use('/api/student', require('./routes/sutdentRoutes'));

app.use(errorHandler);

//Listen

app.listen(port, () => console.log(`server is running on port: ${port}`));
