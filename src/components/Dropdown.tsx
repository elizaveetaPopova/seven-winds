import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from 'styled-components';
import { styled as matherialStyle } from '@mui/material/styles';

const TextStyle = styled.p<{ $size: number }>`
  color: var(--text-color-grey);
  text-transform: capitalize;
  font-size: ${(props) => props.$size + 'px'};
  line-height: ${(props) => props.$size + 2 + 'px'};
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CustomDropdown = matherialStyle(Button)({
  height: '44px',
  width: '100%',
  paddingLeft: 0,
  paddingRight: '7px',
  display: 'flex',
  justifyContent: 'space-between',
});

const Icon = matherialStyle(KeyboardArrowDownIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 30,
}));

const Dropdown = () => {
  return (
    <CustomDropdown endIcon={<Icon />}>
      <TextSection>
        <TextStyle $size={14}>Название проекта</TextStyle>
        <TextStyle $size={10}>Аббревиатура</TextStyle>
      </TextSection>
    </CustomDropdown>
  );
};

export default Dropdown;
