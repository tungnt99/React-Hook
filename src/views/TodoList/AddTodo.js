import React, { useState } from 'react';


export default function AddTodo(props) {
  
   const todos = props.todos
  return (
    <div className='container'>
       
         <div className='todo-list'>
            {todos && todos.length > 0 && todos.map((item, index)=>{
              return(
                <div className='todo-list-item' key={index + 1}>
                  {index + 1}-{item.title}
                </div>
              )
            })}

        </div>
    </div>
  )
}