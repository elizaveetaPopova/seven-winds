import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import NavigationPanel from './components/NavigationPanel';
import { customPalette } from './palette';
import { cssVar } from './functions';
import Dashboard from './components/Dashboard';

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
  height: 100vh;
`;

function App() {
  const [theme] = useState(() =>
    createTheme({
      palette: {
        primary: {
          main: cssVar('--text-color-main'),
        },
      },
    }),
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <NavigationPanel />
        <Dashboard />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
