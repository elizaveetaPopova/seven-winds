import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
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
}));

interface CustomButtonProps extends ButtonProps {
  children: string;
}

export const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
