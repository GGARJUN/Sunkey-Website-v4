import Script from 'next/script'

interface GoogleTagManagerProps {
  gtmId: string
}

/**
 * Google Tag Manager integration for Next.js App Router.
 *
 * Usage: add <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
 * to the root layout.tsx before the closing </body> tag.
 *
 * The script loads with strategy="afterInteractive" so it does not
 * block the initial render.
 *
 * GTM container ID format: GTM-XXXXXXX
 * Set NEXT_PUBLIC_GTM_ID in Vercel environment variables.
 * Leave blank in development to suppress the script.
 */
export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) return null

  return (
    <>
      {/* GTM Script — loads after page is interactive */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
          `.trim(),
        }}
      />

      {/* GTM noscript fallback — injected via dangerouslySetInnerHTML on body.
          In Next.js App Router, inject this directly in layout.tsx body tag
          using the approach below rather than as a React element,
          because <noscript> with dangerouslySetInnerHTML needs to be in <body>.
          The JS version above covers 99.9%+ of users.
      */}
    </>
  )
}

/**
 * GTM noscript string — paste into the layout's <body> opening tag
 * if you need noscript coverage:
 *
 * <body>
 *   <noscript>
 *     <iframe
 *       src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
 *       height="0" width="0"
 *       style={{ display: 'none', visibility: 'hidden' }}
 *     />
 *   </noscript>
 *   {children}
 * </body>
 */
