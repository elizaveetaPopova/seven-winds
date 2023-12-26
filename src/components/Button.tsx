import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)({
  color: '#ffffff',
  fontFamily: 'Roboto',
  textTransform: 'capitalize',
  fontSize: '14px',
  margin: '0 14px',
  padding: 0,

  '&:hover': {
    borderBottom: 'solid #ffffff',
    borderRadius: 0,
    backgroundColor: '#27272A',
  },
  '&::first-of-type': {
    paddingLeft: '17px',
  },
});
