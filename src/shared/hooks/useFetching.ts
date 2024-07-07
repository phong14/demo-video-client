import {
  DefaultError,
  QueryClient,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useEffect } from 'react';

interface IUserFetching<
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey,
  TError = DefaultError,
  TData = TQueryFnData,
> extends UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> {
  queryClient?: QueryClient;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

const useFetching = <
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey,
  TError = DefaultError,
  TData = TQueryFnData,
>({
  queryClient,
  onSuccess,
  onError,
  ...options
}: IUserFetching<TQueryFnData, TQueryKey, TError, TData>): UseQueryResult<TData, TError> => {
  const query = useQuery({ ...options }, queryClient);
  const { isError, isSuccess, data, error } = query;

  useEffect(() => {
    if (isSuccess) {
      onSuccess && onSuccess(data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      onError && onError(error);
    }
  }, [isError]);

  return { ...query };
};

export default useFetching;
