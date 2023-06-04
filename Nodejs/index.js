const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');

const dbConfig = require("./src/configs/db.config");
const serverConfig = require("./src/configs/server.config");

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'))


mongoose.connect(dbConfig.DB_URL)
.then(()=>{
    console.log("Successfuly connected to the database");
})
.catch(err=>{
    console.log("Couldnot connect to the DB")
})

require("./src/Routes/product.routes")(app)
require("./src/Routes/auth.routes")(app);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Your application is running on port ${serverConfig.PORT}`)
})
