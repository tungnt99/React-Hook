import React, { useState } from 'react';
export default function UseState() {
    const [count, setCount] = useState(0);
    let [name, setName] = useState('');
    const [address, setAddress] = useState('');
   
    const handleOnClick = (event) => {
        setName(address);
    }
   
    const handleChangAddress = (event) => {
        setAddress(event.target.value);
    };
  return (
    <div className='container'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        <p>{name}</p>
        <div className='form-group'>
          <input className='form-control' type="text" value={address} onChange={(event) => handleChangAddress(event)} style={{width: '300px', margin: '0 auto'}}/>
          <button onClick={(event) => handleOnClick(event)}>Changle Name!</button>
        </div>
       
    </div>
  )
}
