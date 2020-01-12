import { combineReducers } from 'redux'
import posts from './posts'
import query from './query'

export default combineReducers({
    posts,
    query
})