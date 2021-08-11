const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/companies', require('./routes/companies'))
app.use('/clients', require('./routes/clients'))

//static files


//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
});
