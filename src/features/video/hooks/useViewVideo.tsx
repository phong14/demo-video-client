import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/shared/types';
import { videoServices } from '../services';
import { endpoints } from '../services/endpoints';
import { IPayloadIncreaseView } from '../services/type';

const useViewVideo = ({ onSuccess }: { onSuccess?: (data: ApiResponse<boolean>) => void }) => {
  const mutate = useMutation({
    mutationKey: [endpoints.increaseView()],
    mutationFn: (payload: IPayloadIncreaseView) =>
      videoServices.increaseView(endpoints.increaseView(), payload),
    onSuccess,
  });
  return { ...mutate };
};

export default useViewVideo;
