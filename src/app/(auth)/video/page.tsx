import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import React from 'react';
import { setBrowserTabTitle } from '@/core/utils';
import { videoServices } from '@/features/video/services';
import { endpoints } from '@/features/video/services/endpoints';
import Video from './Video';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Video'),
};

const VideoPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [endpoints.getVideoDetail()],
    queryFn: ({ queryKey, signal }) =>
      videoServices.getVideoDetail(queryKey[0], signal, { videoId: '1' }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Video />
    </HydrationBoundary>
  );
};

export default VideoPage;
