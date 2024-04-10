const express = require('express');
const app = express();
const path = require('path');
const morgan = require ('morgan');
const mysql = require('mysql');
const myConnection= require('express-myconnection');


//settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');

//app.set('views', __dirname + '/views');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'user',
    password: 'mysql',
    port: 3306,
    database: 'Diario'
}, 'single'));

//routes


app.listen(app.get('port'), () => {
    console.log('Server is running on port 3000');
})