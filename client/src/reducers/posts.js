import { FETCH_POSTS, TOGGLE_EDIT, CHANGE_TEXT, EDIT_POST } from '../actions'

const intitialState = {
    posts: [{
        id: '',
        title: '',
        body: '',
        newTitle: '',
        newBody: '',
        edit: false
    }]
}

const posts = (state = intitialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.map( post => {
                return {
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    newTitle: post.title,
                    newBody: post.body,
                    edit: false
                }
            })

        case TOGGLE_EDIT:
            return state.map( post => {
                if(action.id === post.id) {                    
                    return {
                        ...post,
                        newTitle: post.newTitle,
                        newBody: post.newBody,
                        edit: !post.edit
                    }
                } else return post
            })

        case CHANGE_TEXT:
            return state.map( post => {
                if(action.id === post.id) {
                    return {
                        ...post,
                        newTitle: action.newTitle,
                        newBody: action.newBody
                    }
                } else return post
            })
            
        case EDIT_POST:            
            return state.map( post => {
                if(action.id === post.id) {
                    return {
                        ...post,
                        title: action.title,
                        body: action.body,
                        newTitle: action.title,
                        newBody: action.body
                    }
                } else return post
            })

        default:
            return state
    }
}

export default posts