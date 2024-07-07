import apiClient from '@/core/lib/http-common';
import { handleResponseErrors } from '@/shared/helpers';
import { ApiResponse } from '@/shared/types';
import { IPayloadGetDetailVideo, IPayloadIncreaseView, IVideo } from './type';

export const videoServices = {
  getVideoDetail: async (
    url: string,
    signal: AbortSignal,
    payload: IPayloadGetDetailVideo,
  ): Promise<ApiResponse<IVideo>> => {
    try {
      const { data } = await apiClient.post(url, payload, {
        headers: {
          'Cache-Control': 'no-cache',
        },
        signal,
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);
      throw new Error(errorMessage);
    }
  },
  increaseView: async (
    url: string,
    payload: IPayloadIncreaseView,
  ): Promise<ApiResponse<boolean>> => {
    try {
      const { data } = await apiClient.post(url, payload, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      return data;
    } catch (error) {
      const { errorMessage } = handleResponseErrors(error);
      throw new Error(errorMessage);
    }
  },
};
