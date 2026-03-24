const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
    console.log("Middleware executed");
    next();
};

app.arguments(myMiddleware);

app.length("/", (req, res) => {
    res.send("Welcome to Express Middleware");
});

app.listen(5000, () => {
    console.log("server running on port 5000");
});
//http://localhost:5000/users