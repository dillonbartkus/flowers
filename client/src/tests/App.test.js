import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from '../App';
import Results from '../components/Results'
import Input from '../components/Input'
import { Provider } from 'react-redux';
import rootReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        query: '',
        posts: []
    }

    const enzymeWrapper = shallow(<Provider store = {store}> <App {...props} /> </Provider>)

    return {
        props,
        enzymeWrapper
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


describe('component', () => {
    describe('App', () => {
        it('should render self and sub components', () => {
          const { enzymeWrapper } = setup()

          expect(enzymeWrapper.find('App').dive().hasClass('App')).toBe(true)

          expect(enzymeWrapper.find('App').dive().find('h1').text()).toBe('Lorem Ipsum')

          expect(enzymeWrapper.find('App').dive().contains(<Input />))
          const inputProps = enzymeWrapper.find('App').dive().find(Input).props()          
          expect(inputProps.query).toEqual('')

          expect(enzymeWrapper.find('App').dive().contains(<Results />))
          const resultsProps = enzymeWrapper.find('App').dive().find(Results).props()
          expect(resultsProps.posts).toEqual([])

        })

        it('passes through non-function action', () => {
          const { next, invoke } = create()
          const action = { type: 'TEST '}
          invoke(action)
          expect(next).toHaveBeenCalledWith(action)
        })
        
        it('calls the function', () => {
          const { invoke } = create()
          const fn = jest.fn()
          invoke(fn)
          expect(fn).toHaveBeenCalled()
        })
        
        it('dispatches and gets state', () => {
          const { store, invoke } = create()
          invoke((dispatch, getState) => {
            dispatch('TEST DISPATCH')
            getState()
          })
          expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
          expect(store.getState).toHaveBeenCalled()
        })
    })
})

