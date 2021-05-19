import React from 'react'
import './InputTodo.css'
export default function InputTodo() {


    return (
        <div className="input-container">
            <input type="text" name="task" placeholder="Add a new task.."/>
            <button>Add</button>
        </div>
    )
}
