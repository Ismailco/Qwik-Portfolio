import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <></>;
});

export const head: DocumentHead = {
  title: 'Ismail Courr - Frontend Developer Portfolio',
  meta: [
    {
      name: 'description',
      content: "I’m a software developer. I love to build things that live on the internet, from websites to web apps. I specialize in building exceptional digital experiences, products, and services. I'm quietly confident, naturally curious, and perpetually working on improving my skills one at a time.",
    },
  ],
};
