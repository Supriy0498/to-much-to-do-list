const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080
const todo = require("./routes/todo")

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/todos",todo);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb://localhost:27017/toDoList",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false})
        .then(()=>console.log("Connected to MongoDB"))
        .catch((err)=>console.log("Some error occurred "+err));

app.listen(PORT,()=>console.log("Sever started"))