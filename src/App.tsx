import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import NavigationPanel from './components/NavigationPanel';
import { customPalette } from './palette';

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;

function App() {
  const [theme] = useState(() => createTheme(customPalette));
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <NavigationPanel />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
