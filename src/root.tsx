import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <link rel="preload stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css" as="style" type="text/css" />
      </head>
      <body lang="en" class="flex flex-col justify-start min-h-screen scroll-smooth">
        <RouterOutlet />
        <ServiceWorkerRegister />
        {/* <!-- Cloudflare Web Analytics --> */}
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "1f8bee185aeb4b7cb2d10b935daa245d"}'></script>
        {/* <!-- End Cloudflare Web Analytics --> */}
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </body>
    </QwikCityProvider>
  );
});
