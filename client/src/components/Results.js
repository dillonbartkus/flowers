import React from 'react'
import Post from './Post'

export default function Results({ posts }) {

  const renderPosts = () => {
    if(posts.length > 0) {
      return posts.map( post => <Post post = {post} key = {post.id} /> )
    }
  }  

  return (

    <div className = 'results'>

      {renderPosts()}

    </div>
  )
}