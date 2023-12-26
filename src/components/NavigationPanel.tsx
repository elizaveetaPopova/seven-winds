import React from 'react';
import { styled } from 'styled-components';

import { projects } from '../mockData';

import Dropdown from './Dropdown';
import ProjectList from './ProjectList';

const NavigationPanelWrapper = styled.div`
  background-color: var(--dashboard-color);
  width: 214px;
  border-right: solid var(--border-color);
  height: 100%;
`;

const NavigationPanel = () => {
  return (
    <NavigationPanelWrapper>
      <Dropdown />
      <ProjectList projects={projects} />
    </NavigationPanelWrapper>
  );
};
export default NavigationPanel;
