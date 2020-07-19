const express = require("express");
const { exec } = require("child_process");

const app = express();

const PORT = process.env.PORT  || 3001 

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static("public"))

const htmlroutes = require("./routes/htmlroute")

htmlroutes(app)

const apiroutes = require("./routes/apiroute")

apiroutes(app)

app.listen(PORT, function(){
    console.log("app is listening" + PORT)
})