import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="w-full my-20 flex flex-col-reverse md:flex-row items-center justify-around">
      <div class="w-3/4 md:w-1/3 my-10">
        <h1>
          Hello, <span>I'm Ismail,</span>
          <br />
          Frontend Developer <br />
          based in Morocco.
        </h1>
        <p>I'm a Frontend Developer based in Morocco. I'm passionate about building web applications and I love to learn new things.</p>
        <div class="font-bold my-4">
          <button class="shadow-md bg-button-grad border border-transparent hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent text-black rounded-full px-6 py-2 duration-500 my-2" type="button">
            GET IN TOUCH
          </button>
          <button class="shadow-md hover:text-black border border-gray-500 rounded-full px-6 py-2 bg-clip-text bg-button-grad text-transparent duration-500 my-2 xl:mx-4" type="button">
            VIEW ALL MY WORKS
          </button>
        </div>
      </div>
      <div class="w-3/4 md:w-1/3 flex justify-end items-center">
        <div class="w-fit bg-button-grad rounded-full p-1 shadow-xl shadow-purple-800 hover:shadow-md duration-700">
          <img class="rounded-full" src="https://avatars.githubusercontent.com/u/25227022?v=4" alt="hero-picture" />
        </div>
      </div>
    </header>
  );
});
