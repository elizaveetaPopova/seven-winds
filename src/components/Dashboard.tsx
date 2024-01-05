import { styled } from 'styled-components';
import { CircularProgress } from '@mui/material';

import { useGetRowsQuery } from '../services/outlay';

import Table from './Table';

const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);
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

const StatusWrapp = styled.div`
  display: flex;
  justify-content: center;
  color: var(--text-color-main);
`;

const Dashboard = () => {
  const { data, error, isLoading } = useGetRowsQuery();
  return (
    <DashboardWrapper>
      <Caption>Строительно-монтажные работы</Caption>
      {isLoading && (
        <StatusWrapp>
          <CircularProgress />
        </StatusWrapp>
      )}
      {error && <StatusWrapp>Произошла ошибка</StatusWrapp>}
      {data && <Table rows={data} />}
    </DashboardWrapper>
  );
};

export default Dashboard;
