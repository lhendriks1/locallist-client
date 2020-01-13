import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
      div)

    ReactDOM.unmountComponentAtNode(div)
  })
})
