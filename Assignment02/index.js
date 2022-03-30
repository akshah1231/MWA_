const express=require("express");

const path=require("path");

const app=express();

require("dotenv").config();

app.use(express.static(path.join(__dirname,"public")));

// app.get("/",function(req,res){
//     res.send(index.)
// })

app.post("/",function(req,res){
    console.log("Json post");
    res.status(200).json({"Json":"Roy"});
});


const server=app.listen(process.env.PORT,function(){
    console.log("listening on port "+server.address().port);
});