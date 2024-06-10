// const { app }  = require('./app');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./routes/userApi');
app.use('/api', userRoutes);


const { sequelize } = require('./config/database');
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// Server listen
var PORT = process.env.APP_PORT || 5000;
var HOST = process.env.APP_HOST || '127.0.0.1';

app.listen(PORT, HOST, (error) => {
    if (error) throw error;
    console.log(`Express server started at http://${HOST}:${PORT}`);
});