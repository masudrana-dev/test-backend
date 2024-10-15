const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/dbConnection')
const softivRoute = require('./routes/softivRoute.js')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
dbConnection();

app.use(softivRoute)

app.listen(5000, () => {
    console.log('this server is run from the 5000');
})