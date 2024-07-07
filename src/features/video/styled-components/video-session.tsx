import { Box, styled } from '@mui/material';
import { shine } from '@/shared/styles/keyframes';

const VIDEO_HEIGHT = 420;

const CardVideo = styled(Box)(props => ({
  minHeight: VIDEO_HEIGHT,
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: props.theme.palette.common.black,
}));

const IFrame = styled('iframe')(() => ({
  width: 'calc(100% + 1px)',
  aspectRatio: '16/9',
  height: '100%',
  animation: `1.5s ${shine} linear infinite`,
  border: 'none',
  marginLeft: -1,
}));

export { CardVideo, IFrame };
