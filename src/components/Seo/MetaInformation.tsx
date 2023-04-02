import { jsonLdScriptProps } from 'react-schemaorg';
import { Organization } from 'schema-dts';

export default function MetaInformation() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      <script
        {...jsonLdScriptProps<Organization>(
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Next13',
            alternateName: 'Next13',
            url: 'https://www.next13.de/',
            logo: 'https://www.next13.de/images/logo.png',
            contactPoint: [{
              '@type': 'ContactPoint',
              telephone: '0800 123 123 123',
              contactType: 'customer service',
            }],
            sameAs: ['https://www.facebook.com/next13', 'https://instagram.com/next13'],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.9,
              ratingCount: 64,
              bestRating: 5,
            },
          },
        )}
      />

    </>
  );
}
