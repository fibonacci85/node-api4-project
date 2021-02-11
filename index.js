const express = require('express');



const app = express()



app.use(express.json())






//establishing my port and using enviroment variable 
const port = process.env.PORT || 3500
app.listen(port, () => {`server listening on port: ${port}`})