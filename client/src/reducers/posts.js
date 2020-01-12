import { FETCH_POSTS, EDIT_POST } from '../actions'

const initialState = {
    posts: []
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return state, action.payload
        case EDIT_POST:
            return state.map( post => {
                if(action.id === post.id) {
                    return {
                        ...post,
                        title: action.title,
                        body: action.body
                    }
                } else return post
            })

        default:
            return state
    }
}

export default posts