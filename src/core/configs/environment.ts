import _toNumber from 'lodash/toNumber';

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  SECONDS_ALLOWED_TO_INCREASE_VIEWS: _toNumber(
    process.env.NEXT_PUBLIC_SECONDS_ALLOWED_TO_INCREASE_VIEWS,
  ),
};
