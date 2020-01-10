import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <main className='App'>
      <Route
        exact path ={'/'}
        render={props => <h1>App is connected</h1>}
      />
    </main>
  );
}