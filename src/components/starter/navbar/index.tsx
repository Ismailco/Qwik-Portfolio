import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="w-full flex justify-around items-center h-16 bg-black text-[#f3f3f3] font-bold shadow-xl">
      <a class="hover:bg-clip-text hover:bg-button-grad hover:text-transparent" href="#">
        Ismailcourr.<small class="text-xs">tech</small>
      </a>
      <ul class="flex text-gray-300 font-normal">
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
          <a href="#">Home</a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
          <a href="#">Skills</a>
        </li>
        <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
          <a href="#">Projects</a>
        </li>
      </ul>
      <button class="bg-button-grad text-black rounded-full px-6 py-2 hover:bg-clip-text hover:bg-button-grad hover:text-transparent" type="button">
        LET'S TALK
      </button>
    </nav>
  );
});
