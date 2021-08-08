import React, { useState } from 'react'

import axios from 'axios'

export const PostForm = ( { setPosts, posts }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    

    const onSubmit = e => {
        e.preventDefault();

        const newpost = {
            title : title,
            body : body
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', 
                    newpost, {headers : {'Content-type' : 'application/json'}})
             .then(res => 
                setPosts([res.data,...posts])
            )

        setTitle('')
        setBody('')
        
    }

    return (
        <div className="postForm">
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label> <br />
                    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body: </label> <br />
                    <textarea name="body" value={body} onChange={(e)=>setBody(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
