import { TextField, outlinedInputClasses, styled } from '@mui/material';

export default styled(TextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.secondary.light,
    height: '36px',
    padding: '0 10px',
    color: theme.palette.secondary.dark,
    width: '100%',
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: theme.palette.secondary.light,
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: theme.palette.secondary.light,
    },
  [`& .${outlinedInputClasses.input}`]: {
    borderColor: theme.palette.secondary.light,
    padding: '0 10px',
    height: '33px',
    width: '100%',
    color: theme.palette.secondary.dark,
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));
