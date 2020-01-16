import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editPost } from '../actions/actions'
import { toggleEdit } from '../actions/actions'
import { changeText } from '../actions/actions'

export const Post = props => {

  const { dispatch, post } = props

  if(post.edit)return (  // edit form toggles when text is clicked

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
      onClick = { () => {  // replaces title and body of post with placeholder newTitle and newBody. Also toggles form edit off.
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

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect()(Post)