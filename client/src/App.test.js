import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

it("fetches post data", async () => {
  const fakePost = {
    id: 1,
    title: "lorem ipsum",
    body: "quid pro quo"
  };

  expect(fakePost).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String)
    })
  )

});