import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdPage from './AdPage';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AdPage />
      </BrowserRouter>,
      div)

    ReactDOM.unmountComponentAtNode(div)
  })
})
