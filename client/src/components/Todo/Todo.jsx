import React, { useState } from 'react'
import "./Todo.css"
import axios from "axios"

export default function Todo(props) {

    const [isEdit,setIsEdit] = useState(false);
    const [task,setTask] = useState(props.todo.task);
    const url = "/api/todos/"+props.todo._id;

    async function handleDelete() {
        
        axios.delete(url)
            .then(res=>{
                console.log(res);
                props.updateTodos();
            })
            .catch(err=>console.log(err));
    }

    function updateTodo() {
        axios.put(url,{task:task})
            .then(res=>{
                console.log(res);
                setIsEdit(false);
                props.updateTodos();
            })
            .catch(err=>console.log(err));
    }

    function handleCancel() {
        setIsEdit(false);
    }

    function handleOnEdit() {
        setIsEdit(true)
    }

    function handleChange(e) {
        setTask(e.target.value)
    }

    return (
        <div className="todo">
            {!isEdit && task}
            {isEdit && <input type="text" 
            defaultValue={props.todo.task}
            onChange={handleChange}
            autoFocus
            /> }
            {!isEdit && <button className="del-btn" onClick={handleDelete}><i class="fa fa-trash fa-lg"></i></button>}
            {!isEdit && <button className="edit-btn" onClick={handleOnEdit}><i class="fa fa-edit fa-lg"></i></button>}
            {isEdit && <button className="cross-btn" onClick={handleCancel}><i class="fa fa-times-circle fa-2x"></i></button>}
            {isEdit && <button className="check-btn" onClick={updateTodo}><i class="fa fa-check-circle fa-2x"></i></button>}
        </div>
    )
}
