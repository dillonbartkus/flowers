export const FETCH_POSTS = 'FETCH_POSTS'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const EDIT_POST = 'EDIT_POST'
export const SET_QUERY = 'SET_QUERY'

export const fetchPosts = () => {
    return dispatch => fetch('http://localhost:3000/posts')
        .then( res => res.json() )
        .then( posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

export const toggleEdit = post => ({
    type: TOGGLE_EDIT,
    id: post.id
})

export const changeText = post => ({
    type: CHANGE_TEXT,
    id: post.id,
    newTitle: post.newTitle,
    newBody: post.newBody
})

export const editPost = post => ({
    type: EDIT_POST,
    id: post.id,
    title: post.title,
    body: post.body
})

export const setQuery = query => ({
    type: SET_QUERY,
    query
})