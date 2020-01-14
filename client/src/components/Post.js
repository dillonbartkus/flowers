import React from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'
import { toggleEdit } from '../actions'
import { changeText } from '../actions'

const Post = props => {

  const { dispatch, post } = props

  if(post.edit)return (

    <div className= "post">

      <textarea
      name = 'title'
      value = {post.newTitle}
      onChange = { e => dispatch(changeText({id: post.id, newTitle: e.target.value, newBody: post.newBody})) }
      ></textarea>

      <textarea
      name = 'body'
      value = {post.newBody}
      onChange = { e => dispatch(changeText({id: post.id, newBody: e.target.value, newTitle: post.newTitle})) }
      ></textarea>

      <button
      onClick = { () => {        
        dispatch(toggleEdit({id: post.id}))
        dispatch(editPost({
          id: post.id,
          title: post.newTitle,
          body: post.newBody
        }))
      }}
      >Submit</button>

    </div>

  )

  return(

    <div
    onClick = { () => dispatch(toggleEdit({id: post.id})) }
    className= "post">

      <p>{post.title}</p>

      <p>{post.body}</p>

    </div>

  )
}

export default connect()(Post)