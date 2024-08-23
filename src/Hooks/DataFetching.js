import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);
    useEffect(async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            setPosts(res.data)
        })

      //  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      //  if(resp.ok){
      //   const result = await resp.json()
      //   setPosts(result.data)
      //  }
       

    }, [])
  return (
    <div>
       <ul>
        {posts.map(post => (
<li key={post.id}>{post.title}</li>
        ))}
        </ul> 
    </div>
  )
}

export default DataFetching