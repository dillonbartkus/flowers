import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Provider store = {store}> <App /> </Provider>, div);
});

it("fetches post data", async () => {
  const fakePost = {
    id: 1,
    title: "lorem ipsum",
    body: "quid pro quo"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePost)
    })
  );

  expect(fakePost).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String)
    })
  )

  global.fetch.mockRestore();

});