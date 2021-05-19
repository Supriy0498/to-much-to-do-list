import React,{useState,useEffect} from 'react'
import InputTodo from '../InputTodo/InputTodo'
import Todo from '../Todo/Todo'
import axios from "axios"
import './TodoContainer.css'

export default function TodoContainer() {

    const [todos,setTodos] = useState([]);

    const styles = {
        divider:{
            height:"1px", 
            background:"#282c34",
            marginBottom:"20px"
        }
    }

    const url = "/api/todos";

    async function getTodos() {
        
        axios.get(url)
            .then(res=>{
                setTodos(res.data)
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        console.log("useEffect");
        getTodos();
      },[])

    return (
        <div className="todo-container">
            My Todo List
            <InputTodo 
            updateTodos={getTodos}
            />
            <div style={styles.divider}></div>
            {todos.map((todo,index)=>
                <Todo
                key={index}
                todo ={todo}
                updateTodos={getTodos}
                />
            )}
        </div>
    )
}
