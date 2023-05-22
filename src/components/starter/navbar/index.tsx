import { component$, $, useSignal } from '@builder.io/qwik';
import { sendEmail } from '~/routes';
import { scrollToElement } from './scroll-to';

export default component$(() => {
  const menu = useSignal(false);

  const toggleMenu = $(() => {
    menu.value = !menu.value;
     if (typeof window !== 'undefined') {
       const menu = document.getElementById('mobile-menu');
       if (menu) {
          if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
          } else {
            menu.classList.add('hidden');
          }
       }
     }
  });

  return (
    <nav class="w-full flex justify-around items-center h-16 bg-black text-[#f3f3f3] font-bold shadow-xl">
      <a class="md:w-1/3 xl:w-1/6 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" aria-label="Portfolio logo" href="#">
        Ismailcourr.<small class="text-xs">tech</small>
      </a>
      <ul class="xl:w-1/6 hidden xl:flex text-gray-300 font-normal">
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('home')} preventdefault:click>
            Home
          </a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('skills')} preventdefault:click>
            Skills
          </a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('projects')} preventdefault:click>
            Projects
          </a>
        </li>
      </ul>
      <div class="md:w-1/3 xl:w-1/6 flex justify-end items-center">
        <button class="hidden xl:block bg-button-grad text-black rounded-full px-6 py-2 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" type="button" onClick$={sendEmail}>
          LET'S TALK
        </button>
        <button class="xl:hidden bg-button-grad text-black rounded-full px-6 py-2 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" type="button" onClick$={toggleMenu}>
          Menu
        </button>
        <div id="mobile-menu" class="flex flex-col justify-start items-start rounded-bl-full bg-black px-10 shadow-xl xl:hidden absolute w-96 h-screen top-16 right-0">
          <ul class="text-[#f3f3f3d1] mb-40 font-bold text-2xl">
            <li class="m-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
              <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('home')} preventdefault:click>
                Home
              </a>
            </li>
            <li class="m-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
              <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('skills')} preventdefault:click>
                Skills
              </a>
            </li>
            <li class="m-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
              <a aria-label="The navbar links" href="#" onClick$={() => scrollToElement('projects')} preventdefault:click>
                Projects
              </a>
            </li>
          </ul>
          <ul class="flex my-2">
            <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
              <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700" aria-label="Social media links" target="_blank" href="https://www.instagram.com/ismailco96/">
                <i class="text-gray-600 fab fa-instagram fa-xl"></i>
              </a>
            </li>
            <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
              <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" aria-label="Social media links" target="_blank" href="https://twitter.com/ismailcourr">
                <i class="text-gray-600 fab fa-twitter fa-xl"></i>
              </a>
            </li>
            <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
              <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" aria-label="Social media links" target="_blank" href="https://www.linkedin.com/in/ismailcourr/">
                <i class="text-gray-600 fab fa-linkedin-in fa-xl"></i>
              </a>
            </li>
            <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
              <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" aria-label="Social media links" target="_blank" href="https://github.com/Ismailco">
                <i class="text-gray-600 fab fa-github fa-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
