import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResultsPage from './ResultsPage';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <ResultsPage />
      </BrowserRouter>,
      div)

    ReactDOM.unmountComponentAtNode(div)
  })
})
