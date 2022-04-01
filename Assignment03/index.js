require("dotenv").config();

const express=require("express");
const path=require("path");

const routes=require("./routes/index")

const app=express();

app.use("/",routes);

const server=app.listen(process.env.PORT,function(){
    console.log("Listening on port ",server.address().port);
});

