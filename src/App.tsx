import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import NavigationPanel from './components/NavigationPanel';
import { cssVar } from './functions';
import Dashboard from './components/Dashboard';

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const App = () => {
  const [theme] = useState(() =>
    createTheme({
      palette: {
        primary: {
          main: cssVar('--text-color-main'),
          light: cssVar('--text-color-grey'),
        },
        secondary: {
          main: cssVar('--main-bg-color'),
          light: cssVar('--border-color'),
          dark: cssVar('--text-color-geen'),
        },
      },
    }),
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Content>
          <NavigationPanel />
          <Dashboard />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
