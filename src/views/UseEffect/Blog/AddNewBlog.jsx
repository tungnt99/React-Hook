import React, {useState} from 'react'
import './style/blog.css';
export default function AddNewBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        console.log(title, content);
    }
  return (
    <div className='container add-blog'>
        <h1>Add New Blog</h1>
        <div className="form-group mt-2">
            <label htmlFor="title" className="form-label">Title:</label>
            <input type="text" className="form-control" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="body" className="form-label">Body:</label>
            <input type="text" className="form-control" id='body' value={content} onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div className="form-group mt-4">
            <button className="btn btn-danger" onClick={handleSubmit}>Add Blog</button>
        </div>
    </div>
  )
}
