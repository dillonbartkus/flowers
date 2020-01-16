import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setQuery } from '../actions/actions'

export const Input = ( props ) => {

  const { dispatch, query } = props

  return (

    <div className = 'search-bar'>

      <input
      autoFocus
      placeholder = 'Search titles'
      value = {query}
      onChange = { e => dispatch(setQuery(e.target.value)) }  // set serch query state on input change
      >
      </input>

      { query.length > 0 && <div
      onClick = { () => dispatch(setQuery('')) }  // reset search query to ''
      className = 'reset-button'>X</div> }

    </div>
  )
}

Input.propTypes = {
  query: PropTypes.string.isRequired
}

export default connect()(Input)