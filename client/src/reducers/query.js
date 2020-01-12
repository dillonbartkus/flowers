import { SET_QUERY } from '../actions'

const query = (state = '', action) => {
    if(action.type === SET_QUERY) {
        return state, action.query
    } else return state

}

export default query