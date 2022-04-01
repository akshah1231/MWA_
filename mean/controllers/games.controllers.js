const gameData=require("../data/games.json");

module.exports.getALL=function(req,res){
    console.log("Get all controllers");
    // res.status(200).json({'Ram':true});
    let offset=0;
    let count=5;


    const pageGames=gamesData.slice(offset,offset+5);
    res.status(200).json(gameData);

}

module.exports.getOne=function(req,res){
    console.log("Get one controllers");
    // res.status(200).json({'Ram':true});
    const gameIndex=req.params.gameIndex;
    res.status(200).json(gameData[gameIndex]);

}