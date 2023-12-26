import React from 'react';
import { styled } from 'styled-components';

import Header from './components/Header';

const Wrapper = styled.div`
  background-color: var(--main-bg-color);
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
