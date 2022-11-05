
import React, { useState } from 'react';
import AddTodo from './AddTodo';

export default function ListTodo() {
    const [jobs, setJobs] = useState('');
    const [todos, setTodos] = useState([
        {id: 'todo1', title: 'Nguyen Thanh Tung'},
        {id: 'todo2', title: 'Tung Nguyen Thanh'}
      ]);
    const handleChangeJobs = (event) => {
        setJobs(event.target.value)
    }
    const handleOnClick = (event) => {
        if(!jobs){
            alert("input jobs is required");
            return;
        }
        let todo = {id: '', title: jobs};
        setTodos([...todos, todo]);
        setJobs('');
    }
  return (
    <div className='add-todo'>
         <div className='form-group'>
            <input className='form-control' type="text" value={jobs} onChange={(event) => handleChangeJobs(event)} style={{width: '300px', margin: '0 auto'}}/>
            <button onClick={(event) => handleOnClick(event)}>Changle Name!</button>
        </div>
        <AddTodo
            todos={todos}
            title={'All todos'}
        />
    </div>
  )
}
