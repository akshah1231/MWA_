require("dotenv").config();

require("./data/dbconnection").open();
const express=require("express");
const path=require("path");
const app=express();

const routes=require("./routes/routes");

app.use("/api",routes);


const server=app.listen(process.env.PORT,function(){
    console.log("Listening on port ",server.address().port);
});