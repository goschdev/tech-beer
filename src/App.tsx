import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import Routes from 'components/Routes';

const App: React.SFC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
