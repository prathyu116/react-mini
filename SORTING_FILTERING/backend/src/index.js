const express=require("express")
var cors = require('cors')
var app = express()
 
app.use(cors())

const listController=require("./controllers/list.controller")
app.use("/movies",listController)
module.exports=app