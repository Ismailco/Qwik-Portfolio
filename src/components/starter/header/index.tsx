import { component$ } from '@builder.io/qwik';
import { sendEmail } from '~/routes';

export default component$(() => {
  return (
    <header id="home" class="w-full my-32 flex flex-col-reverse xl:flex-row items-center xl:items-start justify-around">
      <div class="w-5/6 xl:w-1/3 my-10">
        <h1 class="font-bold text-3xl xl:text-5xl line- w-full mb-4">
          👋 Hello, <span class="bg-clip-text bg-button-grad text-transparent">I'm Ismail,</span>
          <br />
          Full-stack Developer <br />
          based in Morocco.
        </h1>
        <p class="">
          {/* I am a fan of technology, music, art, and movies. <br />
          I’m also a detail-oriented professional with excellent communication, interpersonal, and creative thinking skills.
          <br /> */}
          My goal is to always build products that provide pixel-perfect, performant experiences, and are a delight to use. Always looking for opportunities to improve my skills and learn new things in the process. I am a fast learner and always open to new challenges.
          <br />I can help you build a product, feature, or website. Look through some of my work and experience. If you like what you see and have a project you need coded, feel free to contact me.
        </p>
        <div class="font-bold my-6">
          <button class="shadow-md bg-button-grad border border-transparent hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent text-black rounded-full px-6 py-2 duration-500" type="button" onClick$={sendEmail}>
            GET IN TOUCH
          </button>
          <button class="shadow-md hover:text-black border border-gray-500 rounded-full px-6 py-2 bg-clip-text bg-button-grad text-transparent duration-500 mx-2 md:mx-4" type="button">
            <a href="/Resume.pdf" target="_blank" rel="noopener" aria-label="resume">
              MY RESUME
            </a>
          </button>
        </div>
      </div>
      <div class="w-5/6 xl:w-1/3 flex justify-start xl:justify-end items-center">
        <div class="w-96 bg-button-grad rounded-full p-1 shadow-xl shadow-purple-800 hover:shadow-md duration-700">
          <img class="w-full h-full rounded-full" src="/ismail_courr.webp" alt="hero-picture" />
        </div>
      </div>
    </header>
  );
});
