const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080
const todo = require("./routes/todo")

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/todos",todo);

mongoose.connect("mongodb://localhost:27017/toDoList",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false})
        .then(()=>console.log("Connected to MongoDB"))
        .catch((err)=>console.log("Some error occurred "+err));

app.listen(PORT,()=>console.log("Sever started"))