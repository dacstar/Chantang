import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} />
  </BrowserRouter>
);

export default App;
