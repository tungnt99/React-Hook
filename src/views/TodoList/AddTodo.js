import React, { useState } from 'react';


export default function AddTodo(props) {
    // const todos = props.todos
    const {todos, title, deleteDataTodo} = props
    const handleDelete = (id) => {
        deleteDataTodo(id)
    }
  return (
    <div className='container'>
        <p className='title'>{props.title}</p>
         <div className='todo-list'>
            {todos && todos.length > 0 && todos.map((item, index)=>{
              return(
                <div key={index + 1}>
                    <span className='todo-list-item' >{index + 1}-{item.title}</span>
                    <span><button onClick={()=> handleDelete(item.id)}>Delete</button></span>
                </div>
              )
            })}
            <hr/>
        </div>
    </div>
  )
}