import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import  ConnectedInput, { Input } from '../components/Input'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        query: 'title'
    }

    const testState = { query: 'str'}

    const enzymeWrapper = shallow(<Provider store = {store}> <Input {...props} /> </Provider>)

    return {
        props,
        enzymeWrapper,
        testState
    }
}

describe('components', () => {
    describe('Input', () => {
        it('should render self and sub components', () => {
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find(Input).dive().hasClass('search-bar')).toBe(true)
            expect(enzymeWrapper.find(Input).dive().find('input').text()).toEqual('')

        })

        it('should handle change of input', () => {
            const { props, testState } = setup()

            const enzymeWrapper = shallow(<ConnectedInput store = {store} {...props} onChange = { e => {
                testState[query] = e.target.value
            }} />)

            expect(enzymeWrapper.dive().find('input').prop('value')).toEqual('title')
            enzymeWrapper.dive().find('input').simulate('change', { target: { value: "foo"}})
            
            // expect(enzymeWrapper.dive().find('input').prop('value')).toEqual('foo')
        })

        it('should clear the search query', () => {
            const { enzymeWrapper, testState } = setup()

            expect(enzymeWrapper.find(Input).dive().find('div').at(1).text()).toEqual('X')
            // enzymeWrapper.find(Input).dive().find('div').at(1).simulate('click')
            expect(testState.query).toEqual('str')
        })
    })
})