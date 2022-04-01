const studentData=require("../student.json");


module.exports.getALL=function(req,res){
    console.log("Getting all json ");
    res.status(200).json(studentData);
}

module.exports.getOne=function(req,res){
    console.log("getting one data");
    const studentIndex=req.params.studentIndex;
    res.status(200).json(studentData[studentIndex]);
}