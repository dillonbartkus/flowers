import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'
import { toggleEdit } from '../actions'

const Post = props => {

  const { dispatch, post } = props

  const [edit, setEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(post.title)
  const [newBody, setNewBody] = useState(post.body)

  return (

    <div className= "post">

      { edit ?
      <textarea
      name = 'title'
      value = {newTitle}
      onChange = { e => setNewTitle(e.target.value) }
      ></textarea> :

      <p onClick = { () => setEdit(!edit) }>{post.title}</p> }

      { edit ?
      <textarea
      name = 'body'
      value = {newBody}
      onChange = { e => setNewBody(e.target.value) }
      ></textarea> :

      <p onClick = { () => setEdit(!edit) }>{post.body}</p> }

      { edit && <button
      onClick = { () => {
        setEdit(!edit)
        dispatch(editPost({
          id: post.id,
          title: newTitle,
          body: newBody
        }))
      }}
      >
      Submit
      </button> }

    </div>
  )
}

export default connect()(Post)