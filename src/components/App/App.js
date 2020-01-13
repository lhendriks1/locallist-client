import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import TopicsPage from '../../routes/TopicsPage/TopicsPage';
import AdPage from '../../routes/AdPage/AdPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import ResultsPage from '../../routes/ResultsPage/ResultsPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import PostAdPage from '../../routes/PostAdPage/PostAdPage';
import ProfilePage from '../../routes/ProfilePage/ProfilePage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default function App() {

  const [error, setError] = useState(null)
  const errorDiv = error ? <div className="error">{error}</div> : '';


  return (
    <div className='App'>
    <Nav />
    <main>
      {errorDiv}
      <Switch>
        <Route
          exact
          path ={'/'}
          render={props => <LandingPage {...props} />}
        />
        <Route
          exact
          path ={'/topics'}
          render={props => <TopicsPage {...props} />}
        />
        <Route
          path ={'/ads'}
          render={props => <ResultsPage {...props} />}
        />
        <Route
          path ={'/ads/:ad_id'}
          render={props => <AdPage {...props} />}
        />
        <Route
          path ={'/register'}
          render={props => <RegistrationPage {...props} />}
        />
        <Route
          path ={'/login'}
          render={props => <LoginPage {...props} />}
        />
        <Route
          path ={'/post'}
          component={PostAdPage}
        />
        <Route
          path ={'/profile'}
          render={props => <ProfilePage {...props} />}
        />
        <Route 
          component={NotFoundPage}
        />
      </Switch>
    </main>
    <Footer />
    </div>
  );
}