const express = require('express');
const app = express();
app.set('view engi engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{name:'all students'});
});
app.listen(8000,()=>{
    console.log('Server running on port 8000');
});
//use this command in terminal
//npm install express ejs
//and also create views folder in the same folder
//create a index.eks which contains html code 
//http://localhost:8000/