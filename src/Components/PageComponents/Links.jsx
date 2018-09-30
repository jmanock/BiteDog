import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, About, Questions, Privacy, Terms, Form} from './PageSetUp';

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/About' component={About} />
    <Route exact path='/Questions' component={Questions} />
    <Route exact path='/Privacy' component={Privacy} />
    <Route exact path='/Terms' component={Terms} />
    <Route exact path='/Form' component={Form} />
  </Switch>
);
