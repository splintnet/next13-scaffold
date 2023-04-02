import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Scripts from '@/components/PageHelper/Scripts';

export function reportWebVitals(metric: any) {
  console.log(metric);
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Scripts />
    </>
  );
}
