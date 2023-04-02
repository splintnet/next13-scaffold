import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Scripts from '@/components/PageHelper/Scripts';
import dynamic from 'next/dynamic';
import Router from 'next/router';

import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const DynamicComponentWithNoSSR = dynamic(() => import('@/components/PageHelper/CookieConsent'), { ssr: false });
export function reportWebVitals(metric: any) {
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
      <DynamicComponentWithNoSSR />
    </>
  );
}
