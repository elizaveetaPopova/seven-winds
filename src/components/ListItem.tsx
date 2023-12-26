import { styled } from 'styled-components';

import { Project } from '../types';
import squareIcon from '../icons/square.svg';

const ListWrapper = styled.div<{ checked: boolean }>`
  display: flex;
  height: 32px;
  align-items: center;
  padding-left: var(--offset);
  background-color: ${(props) =>
    props.checked ? 'var(--text-color-grey)' : 'var(--dashboard-color)'};
`;

const Icon = styled.img`
  width: 22px;
`;

const Text = styled.p`
  color: var(--text-color-main);
  margin-left: 14px;
`;

const ListItem = ({ item }: { item: Project }) => {
  return (
    <ListWrapper checked={item.checked}>
      <Icon src={squareIcon} />
      <Text>{item.title}</Text>
    </ListWrapper>
  );
};
export default ListItem;
