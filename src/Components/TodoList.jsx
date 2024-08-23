import React, { useState } from 'react'
import { BiCheckDouble, BiEdit, BiTrash, BiCheckCircle, BiReset, BiRefresh } from "react-icons/bi";
import './TodoList.css';
import { useRef } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputvalue, setInputValue] = useState('');
    const [editIndex, setEidtIndex] = useState(-1);
     
    const inputRef = useRef();

    
    const addTodo =() => {
         if(inputvalue.trim()!== "") {
            if(editIndex !== -1){
                // const updatedTodos = [...todos]
                // updatedTodos[editIndex] = {task: inputvalue, completed: updatedTodos[editIndex]}
                //setTodos(updatedTodos)
                setTodos([...todos.filter((t,i)=> i!==editIndex),{task: inputvalue, completed: false}])
                setInputValue('')
                    setEidtIndex(-1)
                }else {  
                setTodos([...todos, {task: inputvalue, completed: false}])
                setInputValue('')
            }
         }
         console.log(inputvalue)
    }
    const startEdit = (index) => {
        setEidtIndex(index)
        inputRef.current.focus()
        const todo = todos[index]
        setInputValue(todo.task)

    }
    const cancelEdit = () =>{
        setInputValue('')
        setEidtIndex(-1)
    }
    const removeTodo = (index) =>{
        const updatedTodos = todos.filter((_, i) => i !==index)
        setTodos (updatedTodos)
    }
    const togglecompleted = (index) =>{
        // const updatedTodos = [...todos]
        // updatedTodos[index].completed = !updatedTodos[index].completed
        const updatedTodo =todos[index]
        setTodos([...todos.filter((t,i)=> i!==index),{...updatedTodo,completed:!updatedTodo.completed}])

    } 
  return (
    <div className='Todo-contianer'>
        <h1>To-Do List</h1>
        <div className='input-section'>
         <input ref={inputRef} type="text" value = {inputvalue} onChange={(e) => setInputValue(e.target.value)} 
           placeholder='Enter a new Task' className="input-field" />
            {/* <input type="text"  onChange={(e) => setInputValue(e.target.value)}  */}
           {/* placeholder='Enter a new Task' className="input-field" /> */}
            { editIndex !== -1 ? (
         <>
         <button onClick={addTodo} className='update-btn'><BiCheckDouble/></button>
         <button onClick={cancelEdit} className="cancel-btn"><BiRefresh /></button>
         </>) : (
         <button onClick={addTodo} className="add-btn">Add</button>

         )}
         
        </div>
          <ul className='todo-list'>

         {todos.map((todo, index) => (
            <li key={index} className={`${todo.completed ? "completed": " "}`}>
                 {todo.task}
                 <div className="btn-group">
                    <button onClick={()=>startEdit(index)} className="bt-edit"><BiEdit/></button>
                    <button onClick={() => removeTodo(index)} ><BiTrash className="bt-remove" /></button>
                    <button className="bt-done" onClick={() => togglecompleted(index)}>
                        {todo.completed ? <BiReset/> : <BiCheckCircle/>}
                    </button>
                 </div>
            </li>
         ))

         }
          </ul>
    </div>
  )
}

export default TodoList