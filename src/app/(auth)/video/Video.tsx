'use client';
import { Container } from '@mui/material';
import VideoSession from '@/features/video/components/VideoSession';
import useVideo from '@/features/video/hooks/useVideo';

const Video = () => {
  const { data, refetch } = useVideo({ videoId: '1' });

  if (!data) {
    return null;
  }

  return (
    <Container maxWidth="md">
      <VideoSession video={data} refetch={() => refetch()} />
    </Container>
  );
};

export default Video;
