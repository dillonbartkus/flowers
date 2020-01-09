import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {

  useEffect( () => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await axios.get('/posts')
    console.log(res)
  }

  return (

    <div className="App">



    </div>
  )
}