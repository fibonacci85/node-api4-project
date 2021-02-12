const express = require('express');
    const app = express()
        app.use(express.json())

const dotenv = require('dotenv').config();






//establishing my port and using enviroment variable 
const port = process.env.PORT || 3500
app.listen(port, () => {`server listening on port: ${port}`})
console.log("It's ALIVE!!!")