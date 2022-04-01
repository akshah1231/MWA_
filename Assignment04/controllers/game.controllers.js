const dbconnection=require("../data/dbconnection");

module.exports.getALL=function(req,res){
    console.log("Getting db");
    // res.status(200).json({'Ram':true});
    const db=dbconnection.get();
    console.log("db",db);

}