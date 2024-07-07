import '@emotion/react';

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL?: string;
    NEXT_PUBLIC_SECONDS_ALLOWED_TO_INCREASE_VIEWS?: string;
  }
}
