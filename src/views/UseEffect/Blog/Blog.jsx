import React from 'react'
import useFetch from '../../../customize/fetch'
import {  Link, useNavigate } from 'react-router-dom';
import './style/blog.css';
export default function Blog() {
    const {data: dataBlogs, isLoading, isError} = 
    useFetch(`https://jsonplaceholder.typicode.com/posts`, false) //fix mềm

    let newData = [];
    if(dataBlogs && dataBlogs.length>0){
        newData = dataBlogs.slice(0, 9);
    }

    // Chuyển page add new data
    let history = useNavigate();
    const handleAddNew = () => {
        history("/addblog");
    }
    return (
        <>  
            <div><button className="btn btn-success mb-3" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blogs-container container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="blog-content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important' }}>Loading data...</div>
                }
            </div>
        </>

  )
}
