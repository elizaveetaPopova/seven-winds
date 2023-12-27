import { styled } from 'styled-components';
import { Button, styled as materialStyled } from '@mui/material';
import { useState } from 'react';

import createIcon from '../icons/adding.svg';
import removeRow from '../icons/TrashFill.svg';
import { IRowRequest } from '../services/outlay/types';

interface RowActionsProps {
  onCreate: (row: IRowRequest) => Promise<void>;
}

const Wrapper = styled.div`
  background-color: var(--border-color);
  width: 48px;
  height: 28px;
  border-radius: 6px;
  display: flex;
`;

const CustomButton = materialStyled(Button)({
  width: '24px',
  height: '28px',
  minWidth: '24px',
});

const Icon = styled.img`
  width: 24px;
`;

const RowActions = ({ onCreate }: RowActionsProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return !isHover ? (
    <CustomButton onMouseEnter={() => setIsHover(true)}>
      <Icon src={createIcon} />
    </CustomButton>
  ) : (
    <Wrapper onMouseLeave={() => setIsHover(false)}>
      <CustomButton onClick={() => onCreate}>
        <Icon src={createIcon} />
      </CustomButton>
      <CustomButton>
        <Icon src={removeRow} />
      </CustomButton>
    </Wrapper>
  );
};

export default RowActions;
