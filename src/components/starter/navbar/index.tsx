import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="flex justify-around items-center h-16 bg-black text-white font-bold shadow-xl backdrop-blur-xl opacity-2">
      <a href="#">Ismailcourr.<small class="text-xs">tech</small></a>
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
      <button class="bg-button-grad border text-black border-gray-800 rounded-full px-4 py-2" type="button">LET'S TALK</button>
    </nav>
  );
});
