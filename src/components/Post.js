import React, { useEffect } from 'react'

import axios from 'axios'

export const Post = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => console.log(res.data))
    })

    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}
