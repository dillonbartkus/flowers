import * as actions from '../actions/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetch posts', () => {

    const data = { post:
        {
            id: 1,
            title: 'string',
            body: 'string'
        }
    }

    it('fetches posts from server', () => {
        fetchMock.get('http://localhost:3000/posts', data)

        fetch('http://localhost:3000/posts')
        .then( res => res.json())

        const expectedActions = [{payload: {post: {id: 1, body: "string", title: "string"}}, type: "FETCH_POSTS"}]
        const store = mockStore({ posts: [] })

        return store.dispatch(actions.fetchPosts()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('toggle edit', () => {
    it('should toggle the form edit on or off', () => {
        const id = 1
        const expectedAction = {
            type: actions.TOGGLE_EDIT,
            id: id
        }
        expect(actions.toggleEdit({id: id})).toEqual(expectedAction)
    })
})

describe('change text', () => {
    it('should change the new text of a post to be used in the edit function', () => {
        const id = 1
        const newTitle = 'string'
        const newBody = 'another'
        const expectedAction = {
            type: actions.CHANGE_TEXT,
            id,
            newTitle,
            newBody
        }
        expect(actions.changeText({id, newTitle, newBody})).toEqual(expectedAction)
    })
})

describe('edit post', () => {
    it('should edit the contents of a post', () => {
        const id = 1
        const title = 'title'
        const body = 'body'
        const expectedAction = {
            type: actions.EDIT_POST,
            id,
            title,
            body
        }
        expect(actions.editPost({id, title, body})).toEqual(expectedAction)
    })
})

describe('set query', () => {
    it('should set the search query to filter posts', () => {
        const query = 'string'
        const expectedAction = {
            type: actions.SET_QUERY,
            query
        }
        expect(actions.setQuery(query)).toEqual(expectedAction)
    })
})