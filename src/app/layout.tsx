import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Viewport } from 'next';
import ThemeCustomization from '@/core/lib/mui';
import ReactQueryProvider from '@/shared/contexts/react-query-provider/provider';
import Providers from './providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = async ({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) => {
  return (
    <html lang={lng}>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeCustomization>
            <ReactQueryProvider>
              <Providers>{children}</Providers>
            </ReactQueryProvider>
          </ThemeCustomization>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
