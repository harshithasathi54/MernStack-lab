const express = require("express");
const app = express();
app.use(express.json());//Middleware to read JSON
let users = [
    {id: 1, name:"Ravi"},
    {id: 2, name:"Sita"}
];
//GET - Retrieve data
app.get("/users",(req, res)=>{
    res.json(users);
});
//POST - Accept data
app.post("/users",(req,res)=>{
    users.push(req.body);
    res.send("User added successfully");
});
//DELETE - Delete resource
app.delete("/users/:id",(req,res)=>{
    users=users.filter(user => user.id != req.params.id);
    res.send("User deleted successfully");
});
app.listen(4000, ()=>{
    console.log("Server running on port 4000");
});
//http://localhost:4000/users