import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="w-full flex justify-around items-center h-16 bg-black text-[#f3f3f3] font-bold shadow-xl">
      <a class="hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" href="#">
        Ismailcourr.<small class="text-xs">tech</small>
      </a>
      <ul class="flex text-gray-300 font-normal">
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a href="#">Home</a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a href="#">Skills</a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent duration-500">
          <a href="#">Projects</a>
        </li>
      </ul>
      <button class="bg-button-grad text-black rounded-full px-6 py-2 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-500" type="button">
        LET'S TALK
      </button>
    </nav>
  );
});
