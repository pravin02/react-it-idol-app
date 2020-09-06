import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container/Container';

const Login = React.lazy(() => import('./Views/Login/Login'));
const Register = React.lazy(() => import('./Views/Register/Register'));
const QA = React.lazy(() => import('./Views/QA/QA'));
const Introduction = React.lazy(() => import('./Views/Introduction/Introduction'));
const Result = React.lazy(() => import('./Views/Result/Result'));
const PageNotFound = React.lazy(() => import('./Views/PageNotFound/PageNotFound'));


const App = () => (
  <Container>
    <Router>
      <Suspense fallback={<div> Loading... </div>}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/introduction">
            <Introduction />
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
  </Container>
)

export default App;
