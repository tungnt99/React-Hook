
import React, { useState } from 'react';
import AddTodo from './AddTodo';

export default function ListTodo() {
    const [jobs, setJobs] = useState('');
    const [todos, setTodos] = useState([
        {id: 'todo1', title: 'Nguyen Thanh Tung', address: 'An Khanh'},
        {id: 'todo2', title: 'Tung Nguyen Thanh', address: 'Yen Lung'},
        {id: 'todo3', title: 'Thanh Tung', address: 'An Khanh'},

      ]);
    const handleChangeJobs = (event) => {
        setJobs(event.target.value)
    }
    const handleOnClick = (event) => {
        if(!jobs){
            alert("input jobs is required");
            return;
        }
        let todo = {id: '', title: jobs, type: 'Thanh Tung'};
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
        <AddTodo
            todos={todos.filter(item => item.address === 'An Khanh')}
            title={`My name is Tung`}
        />
    </div>
  )
}
