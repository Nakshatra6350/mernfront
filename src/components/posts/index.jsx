import React from 'react'
import './index.css'
import Post from '../post'
const Posts = ({posts}) => {
  return (
  <>
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
       
    </div>
  </>
  )
}

export default Posts
