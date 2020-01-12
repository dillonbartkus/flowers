export const FETCH_POSTS = 'FETCH_POSTS'
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