import { Box, styled } from '@mui/material';
import { BACKGROUND_LINEAR_PRIMARY, HEIGHT_HEADER } from '../constants';

const MainLayoutContainer = styled(Box)(() => ({
  display: 'flex',
  minHeight: '100vh',
  background: BACKGROUND_LINEAR_PRIMARY,
}));

const MainContainer = styled(Box)(props => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing(1),
  width: '100%',
  marginTop: HEIGHT_HEADER,
  padding: props.theme.spacing(1),
  [props.theme.breakpoints.up('md')]: {
    padding: props.theme.spacing(2),
  },
}));

export { MainContainer, MainLayoutContainer };
