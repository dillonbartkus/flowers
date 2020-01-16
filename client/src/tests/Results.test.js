import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Results } from '../components/Results'
import { Post } from '../components/Post'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        query: '',
        posts: [
            {
                id: 1,
                title: 'dasd',
                body: 'dadsad'
            },
            {
                id: 2,
                title: 'dasdasd',
                body: 'dasdasd'
            }
        ]
    }

    const enzymeWrapper = shallow(<Provider store = {store}><Results {...props} /></Provider>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Results', () => {
        it('should render self and sub components', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find(Results).dive().hasClass('results')).toBe(true)
            
            expect(setup().props.posts.map( post => <Post post = {post} />))
            
        })
    })
})