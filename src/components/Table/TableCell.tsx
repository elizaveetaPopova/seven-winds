import { styled, TableCell, tableCellClasses } from '@mui/material';

export default styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    fontSize: 14,
    borderBottom: '1px solid' + theme.palette.secondary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderBottom: '1px solid' + theme.palette.secondary.light,
  },
  [`& .${tableCellClasses.root}`]: {
    border: 0,
  },
}));
