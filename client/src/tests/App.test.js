import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Provider store = {store}> <App /> </Provider>, div);
});

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
