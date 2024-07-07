'use client';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { PropsWithChildren } from 'react';

const AuthenticationLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
      }}
    >
      {children}
    </Grid2>
  );
};

export default AuthenticationLayout;
