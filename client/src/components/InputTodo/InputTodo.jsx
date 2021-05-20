import React,{useState} from 'react'
import './InputTodo.css'
import axios from "axios"

export default function InputTodo(props) {

    const [task,setTask] = useState("");
    const url = "/api/todos";

    async function getTodos() {
        
        axios.post(url,{task:task})
            .then(res=>{
                setTask("")
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
            <button className="icon-btn" onClick={handleOnClick}><i class="fa fa-plus"></i></button>
        </div>
    )
}
