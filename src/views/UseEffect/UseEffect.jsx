import React, { useState, useEffect } from 'react';

// 1. useEffect(callback)
// Gọi callback mỗi khi component re-render
// Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// callback sẽ được gọi lại mỗi khi deps thay đổi
// --------------------
// 1. Callback luôn được gọi sau khi component mounted
const tabs = ['posts', 'comments', 'albums'];
export default function UseEffect() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    useEffect(() =>  {
        document.title = title;
        // 2. useEffect(callback, [])
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(posts => {
        //         setPosts(posts)
        //     })

        // 3. useEffect(callback, [deps])
         fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [title, type]);
  return (
    <>
        <div style={{ padding: 20}}>

            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && 
                <>  
                    <div>
                        {tabs.map(tab => (
                            <button 
                                key={tab}
                                style={type === tab ? {color: '#fff', backgroundColor: 'blue'} : {}}
                                onClick={() => setType(tab)}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>
                    <input type="text"  value={title} onChange={e => setTitle(e.target.value)}/>
                    <ul style={{margin: '0 auto', width: '500px',}}>
                        {posts && posts.length > 0 && posts.map((item, index) =>{
                            return(
                                <li style={{textAlign: 'left'}} key={index + 1}>{item.title || item.name}</li>
                                
                            )
                        })}
                    </ul>
                </>
            }

        </div>
    </>
  )
}
