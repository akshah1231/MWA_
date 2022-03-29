const child_process=require("child_process");
const { inherits } = require("util");


console.log("1 start");

const newProcess=child_process.spawn("node",["fuvinacci.js"],{stdio:"inherit"});

console.log("3 end");