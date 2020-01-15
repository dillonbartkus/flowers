import React, { useEffect } from 'react'
import Input from './components/Input'
import Results from './components/Results'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/actions'

const App = ( props ) => {

  const { dispatch, posts, query } = props
  
  useEffect( () => {
    dispatch(fetchPosts()) // fetches posts from server.
  }, [dispatch])

  return (

    <div className= "App">

      <h1>Lorem Ipsum</h1>

      <Input query = {query} />

      <Results query = {query} posts = {posts} />

    </div>
  )
}

const mapStateToProps = state => ({ // posts and search query are saved as props and passed down.
  posts: state.posts,
  query: state.query
})

export default connect(mapStateToProps)(App)