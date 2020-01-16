import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Post } from '../components/Post'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        post: {
            id: 1,
            title: 'lorem ispum',
            body: 'quid pro quo',
            edit: false
        }
    }

    const testState = { edit: false}

    const enzymeWrapper = shallow(<Provider store = {store}><Post {...props} onClick = { () => console.log('das')} /></Provider>)

    return {
        props,
        enzymeWrapper,
        testState
    }
}

const thunkFn = ({ dispatch, getState }) => next => action => {
    if(typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
  
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunkFn(store)(next)(action)
  
    return { store, next, invoke }
  }

describe('components', () => {
    describe('Post', () => {
        it('should render self and sub components', () => {
            const { enzymeWrapper, props } = setup()

            expect(enzymeWrapper.find(Post).dive().hasClass('post')).toBe(true)
            expect(enzymeWrapper.find(Post).dive().find('p').at(0).text()).toEqual(props.post.title)
            expect(enzymeWrapper.find(Post).dive().find('p').at(1).text()).toEqual(props.post.body)
            if(props.post.edit)expect(enzymeWrapper.find(Post).dive().find('textarea').text()).toEqual(props.post.title)
            if(props.post.edit)expect(enzymeWrapper.find(Post).dive().find('textarea').text()).toEqual(props.post.body)

        })
        it('toggles form edit on and off', () => {
            const { enzymeWrapper, props } = setup()

            expect(props.post.edit).toBe(false)
        })
    })
})