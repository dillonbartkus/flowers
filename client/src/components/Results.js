import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { setQuery } from '../actions'

const Results = ( props ) => {

  const { dispatch, posts, query } = props

  let filteredPosts // post titles that include the search query.
  if(posts.length > 0)filteredPosts = posts.filter( post => post.title.includes(query))

  const autoComplete = () => { // filters post titles that include search query and maps out a list of them in a dropdown menu.
    if(query.length > 2 && query.length < 10) {
      return filteredPosts.map( post => {
        const queryInd = post.title.indexOf(query)
        const leftHalf = post.title.substring(0, queryInd)
        const rightHalf = post.title.substring(queryInd + query.length, post.title.length -1)
        return (
          <div
          onClick = { () => dispatch(setQuery(post.title)) } // when clicked, sets search query to predicted title
          className = 'autocomplete-option' key = {post.title}>
          <p className = 'left'>{leftHalf}</p>
          <p className = 'query'>{query}</p>
          <p className = 'right'>{rightHalf}</p>
          </div>
        )
    })
  }}

  const renderPosts = () => {
    if(posts.length > 0) {
      return filteredPosts.map( post => <Post post = {post} key = {post.id} /> )
    }
  }  

  return (

    <div className = 'results'>

      <div className = 'autocomplete-container'>
        {autoComplete()}
      </div>

      {renderPosts()}

    </div>
  )
}

export default connect()(Results)