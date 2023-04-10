import { component$, useTask$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  useTask$(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap';
    link.onload = () => {
      link.removeAttribute('onload');
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });

  return (
    <>
      <title>Ismail Courr - Frontend Developer Portfolio</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="./web-preview.png" />
      <meta property="og:description" content="I’m a software developer. I love to build things that live on the internet, from websites to web apps. I specialize in building exceptional digital experiences, products, and services. I'm quietly confident, naturally curious, and perpetually working on improving my skills one at a time." />
      <meta property="og:url" content="https://ismailcourr.ml" />
      <meta name="author" content="Ismail courr" />
      <meta name="description" content="I’m a software developer. I love to build things that live on the internet, from websites to web apps. I specialize in building exceptional digital experiences, products, and services. I'm quietly confident, naturally curious, and perpetually working on improving my skills one at a time." />
      <meta name="keywords" content="ismail, courr, portfolio, web developer, front end, back end, full stack, developer, html, css, Qwik, JavaScript, React, Redux, Tailwind css, Node js, Express js, MongoDB, Mongoose, Git, Github, Heroku, Netlify, Vercel, Firebase, Figma, jr front end developer, senior front end developer, front end developer intern, remote junior front end developer, react front end developer, front end developer resume, front end developer internship, front end developer portfolio, SEO, CEO, Fonder, CodeX Computing" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ismailco" />
      <meta name="twitter:creator" content="@ismailco" />
      <meta name="twitter:title" content="Ismail Courr - Front-end Developer" />
      <meta name="twitter:description" content="I’m a software developer. I love to build things that live on the internet, from websites to web apps. I specialize in building exceptional digital experiences, products, and services. I'm quietly confident, naturally curious, and perpetually working on improving my skills one at a time." />
      <meta name="twitter:image" content="./web-preview.png" />
      <meta name="theme-color" content="#5E17EB" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo-192-192.png" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> */}

      {/* <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" /> */}
      <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap" />
      </noscript>

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
