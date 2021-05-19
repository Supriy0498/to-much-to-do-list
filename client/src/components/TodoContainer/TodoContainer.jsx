import React from 'react'
import InputTodo from '../InputTodo/InputTodo'
import './TodoContainer.css'

export default function TodoContainer() {

    const styles = {
        divider:{
            height:"1px", 
            background:"#282c34"
        }
    }

    return (
        <div className="todo-container">
            My Todo List
            <InputTodo/>
            <div style={styles.divider}></div>
        </div>
    )
}
