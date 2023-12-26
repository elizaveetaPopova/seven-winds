import React from 'react';
import { styled } from 'styled-components';

import Dropdown from './Dropdown';

const NavigationPanelWrapper = styled.div`
  background-color: var(--dashboard-color);
  padding-left: var(--offset);
  width: 214px;
`;

const NavigationPanel = () => {
  return (
    <NavigationPanelWrapper>
      <Dropdown />
    </NavigationPanelWrapper>
  );
};
export default NavigationPanel;
