import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NotFound from './components/NotFound';
import Header from './components/Header';

const Photo = React.lazy(() => import('./feature/Photo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
