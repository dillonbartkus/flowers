import { SET_QUERY } from '../actions/actions'

const query = (state = '', action) => {
    switch(action.type) {
        case SET_QUERY:
            return action.query
        default:
            return state
    }
}

export default query