import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Post from '../components/Results'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        post: Object
    }

    const enzymeWrapper = shallow(<Provider store = {store}><Post {...props} /></Provider>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Post', () => {
        it('should render self and sub components', () => {
            const { enzymeWrapper } = setup()

        })
    })
})