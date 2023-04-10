import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header id="home" class="w-full my-32 flex flex-col-reverse xl:flex-row items-center xl:items-start justify-around">
      <div class="w-5/6 xl:w-1/3 my-10">
        <h1 class="font-bold text-3xl xl:text-5xl line- w-full mb-4">
          Hello, <span class="bg-clip-text bg-button-grad text-transparent">I'm Ismail,</span>
          <br />
          Frontend Developer <br />
          based in Morocco.
        </h1>
        <p class="">I'm a Frontend Developer based in Morocco. I'm passionate about building web applications and I love to learn new things.</p>
        <div class="font-bold my-6">
          <button class="shadow-md bg-button-grad border border-transparent hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent text-black rounded-full px-6 py-2 duration-500" type="button">
            GET IN TOUCH
          </button>
          <button class="shadow-md hover:text-black border border-gray-500 rounded-full px-6 py-2 bg-clip-text bg-button-grad text-transparent duration-500 md:mx-4" type="button">
            VIEW ALL MY WORKS
          </button>
        </div>
      </div>
      <div class="w-5/6 xl:w-1/3 flex justify-start xl:justify-end items-center">
        <div class="w-fit bg-button-grad rounded-full p-1 shadow-xl shadow-purple-800 hover:shadow-md duration-700">
          <img class="w-full h-full rounded-full" src="/ismail_courr.webp" alt="hero-picture" />
        </div>
      </div>
    </header>
  );
});
