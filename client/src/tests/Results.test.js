import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Results from '../components/Results'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        query: String,
        posts: Array
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



        })
    })
})