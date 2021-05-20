import React from 'react'
import "./Todo.css"
import axios from "axios"

export default function Todo(props) {


    const url = "/api/todos/"+props.todo._id;

    async function handleDelete() {
        
        axios.delete(url)
            .then(res=>{
                console.log(res);
                props.updateTodos();
            })
            .catch(err=>console.log(err));
    }

    return (
        <div className="todo">
            {props.todo.task}
            <button className="del-btn" onClick={handleDelete}><i class="fa fa-trash fa-lg"></i></button>
        </div>
    )
}
