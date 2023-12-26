import { styled } from 'styled-components';

import Table from './Table';

const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Caption = styled.div`
  height: var(--heigth-of-blocks);
  color: var(--text-color-main);
  font-size: 18px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-right: solid var(--border-color);
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Caption>Строительно-монтажные работы</Caption>
      <Table />
    </DashboardWrapper>
  );
};

export default Dashboard;
