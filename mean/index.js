require("dotenv").config();

const express=require("express");

const path=require("path");

const routes=require("./routes/routes");


const app=express();

app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});
app.use("/api",routes);

app.use(express.static(path.join(__dirname,"public")));



const server=app.listen(process.env.PORT,function(){
    console.log("Listening on port ",server.address().port);
});