const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose}= require('./database');
const cors = require ('cors');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/teachers', require('./routers/teachers.routes'));
app.use('/api/users', require('./routers/users.routes'));


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port "+app.get('port'));
});