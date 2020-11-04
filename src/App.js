import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './container/Home';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
