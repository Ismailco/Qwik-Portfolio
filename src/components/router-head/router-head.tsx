import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>Ismail Courr - Full-Stack Developer | Web, Mobile, and API Solutions</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="./web-preview.png" />
      <meta property="og:description" content="Experienced full-stack developer specializing in web and mobile app development using MERN Stack, React, Tailwind CSS, Ruby on Rails, and React Native. Offering custom web applications, responsive designs, cross-platform mobile apps, API development and integration, and database solutions. Let's build something great together!" />
      <meta property="og:url" content="https://ismailcourr.dev" />
      <meta name="author" content="Ismail Courr" />
      <meta name="description" content="Experienced full-stack developer specializing in web and mobile app development using MERN Stack, React, Tailwind CSS, Ruby on Rails, and React Native. Offering custom web applications, responsive designs, cross-platform mobile apps, API development and integration, and database solutions. Let's build something great together!" />
      <meta name="keywords" content="full-stack developer, web development, mobile app development, MERN stack, React, Node.js, Express.js, MongoDB, Ruby on Rails, PostgreSQL, Tailwind CSS, React Native, API development, API integration, Progressive Web Apps, single page applications, custom web applications, responsive web design, cross-platform mobile apps, database solutions, RESTful APIs, GraphQL, real-time applications, authentication and authorization, UI components, state management" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ismailco" />
      <meta name="twitter:creator" content="@ismailco" />
      <meta name="twitter:title" content="Ismail Courr - Full-Stack Developer | Web, Mobile, and API Solutions" />
      <meta name="twitter:description" content="I’m a software developer. I love to build things that live on the internet, from websites to web apps. I specialize in building exceptional digital experiences, products, and services. I'm quietly confident, naturally curious, and perpetually working on improving my skills one at a time." />
      <meta name="twitter:image" content="./web-preview.png" />
      <meta name="theme-color" content="#5E17EB" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo-192-192.png" />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> */}

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
