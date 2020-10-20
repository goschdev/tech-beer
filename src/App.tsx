import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Routes } from 'components/Routes';
import { Header } from 'components/Header';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
