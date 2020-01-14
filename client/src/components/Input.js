import React from 'react'
import { connect } from 'react-redux'
import { setQuery } from '../actions'

const Input = ( props ) => {

  const { dispatch, query } = props

  return (

    <div className = 'search-bar'>

      <input
      autoFocus
      value = {query}
      onChange = { e => dispatch(setQuery(e.target.value)) }
      >
      </input>

      <div
      onClick = { () => dispatch(setQuery('')) }
      className = 'reset-button'>X</div>

    </div>

  )
}

export default connect()(Input)