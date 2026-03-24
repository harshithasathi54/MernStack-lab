const express = require("express");
const app = express();
//Custom middleware
const myMiddleware = (req, res, next)=>{
    console.log("Middleware executed");
    next();//Move to next function
};
//use middleware
app.use(myMiddleware);
//route
app.get("/",(req,res) =>{
    res.send("Welcome to Express Middleware");
});
//start server
app.listen(5000,()=>{
    console.log("Server running on port 5000")
});
//http://localhost:5000/