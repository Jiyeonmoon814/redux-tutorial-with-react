import React, { useEffect, useState } from 'react'

import { PostForm } from './PostForm'
import axios from 'axios'

export const Post = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => setPosts(res.data))
    },[])

    return (
        <>
        <PostForm setPosts={setPosts} posts={posts} />
        <h1 className="postsHeader">Posts</h1>
        <div className="postsWrap">
            {posts.map(post =>(
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
        </>
    )
}
