import { Typography, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Player from '@vimeo/player';
import { useEffect, useRef } from 'react';
import { ENV } from '@/core/configs';
import useViewVideo from '../hooks/useViewVideo';
import { IVideo } from '../services/type';
import { CardVideo, IFrame } from '../styled-components/video-session';

interface IVideoSessionProps {
  video: IVideo;
  refetch: () => void;
}

const VideoSession = ({
  video: { url, title, totalView, videoId },
  refetch,
}: IVideoSessionProps) => {
  const theme = useTheme();
  const increasedViewRef = useRef<boolean>(false);
  const { mutate } = useViewVideo({
    onSuccess(data) {
      if (data.data) {
        refetch();
      }
      increasedViewRef.current = true;
    },
  });

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new Player(iframe);
      let timer: NodeJS.Timeout | null;
      let lastTime = 0;
      let watchTime = 0;

      const handlePlay = () => {
        timer && clearInterval(timer);
        timer = setInterval(async () => {
          const currentTime = await player.getCurrentTime();
          const duration = await player.getDuration();
          const time = Math.abs(currentTime - lastTime);
          const timeFloor = Math.floor(time);

          if (time !== 0 && (timeFloor === 1 || timeFloor === 0)) {
            watchTime += 1;
          }

          if (!increasedViewRef.current && watchTime >= ENV.SECONDS_ALLOWED_TO_INCREASE_VIEWS) {
            mutate({ userId: '1', videoId, duration });
          }

          lastTime = currentTime;
        }, 1000);
      };

      const handleClearInterval = () => {
        timer && clearInterval(timer);
        timer = null;
      };

      const handleEnded = () => {
        handleClearInterval();
        increasedViewRef.current = false;
        watchTime = 0;
      };

      const handleSeeked = async () => {
        lastTime = await player.getCurrentTime();
      };

      player.on('play', handlePlay);
      player.on('pause', handleClearInterval);
      player.on('ended', handleEnded);
      player.on('seeked', handleSeeked);
      return () => {
        player.off('play');
        player.off('pause');
        player.off('ended');
      };
    }
  }, []);

  return (
    <Grid2 container spacing={theme.spacing(1)}>
      <Grid2 xs={12}>
        <CardVideo display="flex" justifyContent="center" alignItems="center">
          <IFrame loading="lazy" src={url} allow="autoplay; fullscreen" />
        </CardVideo>
      </Grid2>
      <Grid2 xs={12}>
        <Typography variant="h2" textAlign="left" style={{ textTransform: 'capitalize' }}>
          {title}
        </Typography>
      </Grid2>
      <Grid2 xs={12}>
        <Typography variant="body1" textAlign="left">
          {totalView} Views
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default VideoSession;
