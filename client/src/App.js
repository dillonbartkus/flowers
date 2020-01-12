import React, { useEffect } from 'react'
import Input from './components/Input'
import Results from './components/Results'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

const App = ( props ) => {

  const { dispatch, posts } = props
  
  useEffect( () => {
    dispatch(fetchPosts())
  }, [])

  return (

    <div className= "App">

      <h1>Lorem Ipsum</h1>

      <Input />

      <Results posts = {posts} />

    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(App)