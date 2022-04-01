require("dotenv").config();

const express=require("express");
const path=require("path");

const routes=require("./routes/index")

const app=express();

app.use("/",routes);

app.use("/getsum/:firstNum",function(req,res){
    let firstNum=parseInt(req.params.firstNum);
    let secondNum=parseInt(req.query.secondNum);
    let sum=firstNum+secondNum;
    console.log("sum is "+sum);
    res.end(sum+'');
})

const server=app.listen(process.env.PORT,function(){
    console.log("Listening on port ",server.address().port);
});

