import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
        strategy="afterInteractive"
        type="text/plain"
        data-cookiecategory="analytics"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        type="text/plain"
        data-cookiecategory="analytics"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
        `}
      </Script>
    </>
  );
}
