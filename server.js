const express = require("express")
const app = express();

app.get('/', function (req, res){
    res.send("Server is up and running at port 3000")
})






app.listen(3000, function() {
    console.log("Server is running at port 3000")
})