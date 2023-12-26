import React from 'react';
import { styled } from 'styled-components';

import menuIcon from '../icons/menu-icon.svg';
import cancel from '../icons/go-back.svg';

import { CustomButton as Button } from './Button';

const HeaderWrapper = styled.div`
  background-color: var(--dashboard-color);
  height: 43px;
  display: flex;
  padding-left: var(--offset);
`;

const Icon = styled.img`
  width: 24px;

  &:last-of-type {
    margin-left: var(--offset);
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Icon src={menuIcon} alt="Menu icon" />
      <Icon src={cancel} alt="Cancel action" />
      <Button variant="text">Просмотр</Button>
      <Button variant="text">Управление</Button>
    </HeaderWrapper>
  );
};

export default Header;
