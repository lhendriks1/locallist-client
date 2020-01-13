import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TopicsPage from './TopicsPage';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <TopicsPage />
      </BrowserRouter>,
      div)

    ReactDOM.unmountComponentAtNode(div)
  })
})
