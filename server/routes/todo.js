rconst express = require("express");
const router = express.Router();
const Todo = require("../models/todo")

//route-> /api/todos
router.get("/",(req,res)=>{
    
    Todo.find((err,todos)=>{
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
    console.log(todoId);
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

module.exports = router;