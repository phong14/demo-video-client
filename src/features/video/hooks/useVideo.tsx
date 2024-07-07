import _get from 'lodash/get';
import useFetching from '@/shared/hooks/useFetching';
import { ApiResponse } from '@/shared/types';
import { videoServices } from '../services';
import { endpoints } from '../services/endpoints';
import { IPayloadGetDetailVideo, IVideo } from '../services/type';

const useVideo = (payload: IPayloadGetDetailVideo) => {
  const { data, ...restQuery } = useFetching<ApiResponse<IVideo>, any[]>({
    queryKey: [endpoints.getVideoDetail(), payload],
    queryFn: ({ queryKey, signal }) => videoServices.getVideoDetail(queryKey[0], signal, payload),
  });

  return { ...restQuery, data: _get(data, 'data', null) };
};

export default useVideo;
