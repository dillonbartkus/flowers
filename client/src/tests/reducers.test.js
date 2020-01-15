import queryReducer from '../reducers/query'
import postReducer from '../reducers/posts'
import * as types from '../actions/actions'
import mockData from './mockData'

describe('query reducer', () => {
    it('should set the initial state', () => {
        expect(queryReducer(undefined, '')).toEqual('')
    })

    it('should set the search query', () => {
        expect(
            queryReducer('', {
                type: types.SET_QUERY,
                query: 'title'
            })
        ).toEqual(
            'title'
        )

        expect(
            queryReducer('quid pro quo', {
                type: types.SET_QUERY,
                query: 'quid pro quo Clarice'
            })
        ).toEqual(
            'quid pro quo Clarice'
        )
    })
})

describe('post reducer', () => {
    it('should return initial state', () => {
        expect(postReducer(undefined, {})).toEqual({
            posts: [
                {
                    id: '',
                    title: '',
                    body: '',
                    newTitle: '',
                    newBody: '',
                    edit: false
                }
            ]
        })
    })

    it('should fetch server data and save as posts array', () => {
        expect(postReducer({}, {
            type: types.FETCH_POSTS,
            payload: mockData
        })).toEqual([
            {
                id: 1,
                title: 'string',
                body: 'string',
                newTitle: 'string',
                newBody: 'string',
                edit: false
            },
            {
                id: 2,
                title: 'string',
                body: 'string',
                newTitle: 'string',
                newBody: 'string',
                edit: false
            },
            {
                id: 3,
                title: 'string',
                body: 'string',
                newTitle: 'string',
                newBody: 'string',
                edit: false
            },
            {
                id: 4,
                title: 'string',
                body: 'string',
                newTitle: 'string',
                newBody: 'string',
                edit: false
            },
            {
                id: 5,
                title: 'string',
                body: 'string',
                newTitle: 'string',
                newBody: 'string',
                edit: false
            }
        ])
    })

    it('should change the edit flag to true/false', () => {
        const testpost = mockData.filter( post => post.id === 3)
        expect(postReducer(testpost, {
            type: types.TOGGLE_EDIT,
            post: testpost
        })).toEqual([{
            body: 'string',
            edit: true,
            id: 3,
            title: 'string'
        }])
    })

    it('should allow user to change placeholder text', () => {
        const testpost = mockData.filter( post => post.id === 2)
        expect(postReducer(testpost, {
            type: types.CHANGE_TEXT,
            newTitle: testpost.newTitle,
            newBody: testpost.newBody
        })).toEqual([{
            body: 'string',
            title: 'string',
            id: 2            
        }])
    })

    it('should edit the content of the post', () => {
        const testpost = mockData.filter( post => post.id === 4)
        expect(postReducer(testpost, {
            type: types.EDIT_POST
        })).toEqual([{
            title: 'string',
            id: 4,
            body: 'string'
        }])
    })
})