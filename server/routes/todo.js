const express = require("express");
const router = express.Router();
const Todo = require("../models/todo")

//route-> /api/todos
router.get("/",(req,res)=>{
    
    Todo.find((err,todos)=>{
        if(err) 
            res.send(err);
        else
            res.json(todos);
    });

});

//route-> /api/todos
router.post("/",(req,res)=>{

    const todo = new Todo({
        task:req.body.task
    });

    Todo.insertMany([todo],(err)=>{
        if(err){
            res.status(404);
            res.send(err);
        }
        else{
            res.status(200);
            res.send("Todo added");
        }
    });

});

//route-> /api/todos/:todoId
router.delete("/:todoId",(req,res)=>{

    const todoId = req.params.todoId;
    Todo.findByIdAndDelete(todoId,(err,todo)=>{
        if(err || !todo){
            res.status(404);
            res.send("Todo not found");
        }
        else{
            res.status(200);
            res.send("Todo deleted");
        }
    });
});

//route-> /api/todos/:todoId
router.put("/:todoId",(req,res)=>{

    const todoId = req.params.todoId;
    const task = req.body.task;
    Todo.findByIdAndUpdate(todoId,{task:task,date:Date.now()},(err,todo)=>{
        if(err || !todo){
            res.status(404);
            console.log(err);
            res.send("Todo not found");
        }
        else{
            res.status(200);
            res.send("Todo updated");
        }
    });
});

module.exports = router;