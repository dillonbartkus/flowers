import React from 'react'
import { connect } from 'react-redux'
import { setQuery } from '../actions'

const Input = ({ dispatch }) => {

    const autoComplete = e => {
        
    }

  return (

    <input
    autoFocus
    onChange = { e => dispatch(setQuery(e.target.value)) }
    // onChange = { e => autoComplete(e) }
    >
    </input>
  )
}

export default connect()(Input)