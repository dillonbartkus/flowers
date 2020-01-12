import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

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