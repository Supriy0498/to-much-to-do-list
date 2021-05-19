import React,{useState} from 'react'
import './InputTodo.css'
import axios from "axios"

export default function InputTodo(props) {

    const [task,setTask] = useState("");
    const url = "/api/todos";

    async function getTodos() {
        
        axios.post(url,{task:task})
            .then(res=>{
                props.updateTodos();
            })
            .catch(err=>console.log(err));
    }

    function handleOnChange(e) {
        setTask(e.target.value);
    }

    function handleOnClick(e) {
        getTodos();
    }

    return (
        <div className="input-container">
            <input 
            type="text" name="task" 
            value={task} 
            onChange={handleOnChange}
            placeholder="Add a new task.."/>
            <button onClick={handleOnClick}>Add</button>
        </div>
    )
}
