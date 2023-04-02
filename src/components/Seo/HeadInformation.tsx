import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import appConfig from '../../../app.config';

export default function HeadInformation({
  description = '',
  author = '',
  meta = [],
  title = '',
  titleTemplate = '',
  canonicalUrl = '',
  image = '',
}) {
  const router = useRouter();
  const pageImage = image;

  let canonicalUrlGen = canonicalUrl || router.asPath.split('?')[0];

  // prepend the base url to the canonical url
  if (canonicalUrlGen.indexOf('http') !== 0) {
    // remove first slash if it exists
    canonicalUrlGen = canonicalUrlGen.replace(/^\//, '');
    canonicalUrlGen = `${process.env.NEXT_PUBLIC_SITE_URL}/${canonicalUrlGen}`;
  }

  const generatedTitle = titleTemplate.replace(/%s/g, title);

  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:site_name',
      content: appConfig.name,
    },
    {
      property: 'og:locale',
      content: router.locale,
    },
    {
      property: 'og:author',
      content: author,
    },
    {
      property: 'og:publisher',
      content: author,
    },
    {
      property: 'og:title',
      content: generatedTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: router.asPath,
    },
    {
      property: 'og:image',
      content: pageImage,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: generatedTitle,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: pageImage,
    },
    {
      name: 'twitter:image:at',
      content: generatedTitle,
    },
  ].filter((i) => i.content).concat(meta);
  return (
    <Head>
      <title>{generatedTitle}</title>
      <link rel="canonical" href={canonicalUrlGen} />
      {metaData.map((props, k) => (
        <meta
          key={`meta-${k}`}
          {...props}
        />
      ))}
    </Head>
  );
}

HeadInformation.defaultProps = {
  titleTemplate: `%s | ${appConfig.name}`,
  description: '',
  author: appConfig.name,
};
