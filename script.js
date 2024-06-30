const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; 

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public"))

// app.use(function(req,res,next){
//     console.log("Hello i am middleware");
//     next();
// });

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/aboutme",(req,res)=>{
    res.render("aboutme");
})
app.get("/project",(req,res)=>{
    res.render("project");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})