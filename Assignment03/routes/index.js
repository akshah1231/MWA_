const express=require("express");
const router=express.Router();
const gamesController=require("../controller/controller");


router.route("/student")
    .get(gamesController.getALL);

router.route("/student/:studentIndex")
    .get(gamesController.getOne);

module.exports=router;    