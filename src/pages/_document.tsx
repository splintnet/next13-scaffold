import {
  Html, Head, Main, NextScript,
} from 'next/document';

import MetaInformation from '@/components/Seo/MetaInformation';

export default function Document() {
  return (
    <Html>
      <Head>
        <MetaInformation />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
