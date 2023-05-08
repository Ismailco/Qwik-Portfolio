import { component$ } from '@builder.io/qwik';
import { sendEmail } from '~/routes';
import { scrollToElement } from './scroll-to';

export default component$(() => {
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
        <button class="bg-button-grad text-black rounded-full px-6 py-2 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" type="button" onClick$={sendEmail}>
          LET'S TALK
        </button>
      </div>
    </nav>
  );
});
