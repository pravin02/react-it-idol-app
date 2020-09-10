import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container/Container';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const Login = React.lazy(() => import('./Views/Login/Login'));
const Register = React.lazy(() => import('./Views/Register/Register'));
const QA = React.lazy(() => import('./Views/QA/QA'));
const Instructions = React.lazy(() => import('./Views/Instructions/Instructions'));
const Result = React.lazy(() => import('./Views/Result/Result'));
const PageNotFound = React.lazy(() => import('./Views/PageNotFound/PageNotFound'));


const App = () => (
  <Container>
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div> Loading... </div>} test="">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/instructions">
              <Instructions />
            </Route>
            <Route path="/qa">
              <QA />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="**">
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  </Container>
)

export default App;
