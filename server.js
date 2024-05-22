const express = require("express");
const server = express();
const config = require("./config.json");
const cors = require("cors");
const bodyParser = require("body-parser");

//cross-browser
server.use(cors());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())

const userRoutes = require("./Routes/UserRoutes");
const recordRoutes = require("./Routes/RecordRoutes");

server.use("/user",userRoutes);
server.use("/record",recordRoutes);

server.listen(config.port,()=>{
    console.log("server is open...    port : " + config.port);
})
server.post("/",(req,res)=>{
    
    res.send().status(200);
})