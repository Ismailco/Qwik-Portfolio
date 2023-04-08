import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="w-full min-h-screen flex items-center justify-center">
      <div class="w-2/3">
        <h1>
          Hello, <span>I'm Ismail,</span>
          <br />
          Frontend Developer <br />
          based in Morocco.
        </h1>
        <p>I'm a Frontend Developer based in Morocco. I'm passionate about building web applications and I love to learn new things.</p>
        <div>
          <button>GET IN TOUCH</button>
          <button>VIEW ALL MY WORKS</button>
        </div>
      </div>
      <div class="w-1/3">
        <img src="https://avatars.githubusercontent.com/u/25227022?v=4" alt="hero-picture" />
      </div>
    </header>
  );
});
