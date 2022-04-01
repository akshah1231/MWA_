const express = require("express");
const router = express.Router();
const gamesController=require("../controllers/game.controllers");

// app.get("/json",function(req,res){
//     console.log("json getting");
//     res.status(200).json({"Ram":True});
// })

router.route("/games")
    .get(gamesController.getALL);

module.exports=router;