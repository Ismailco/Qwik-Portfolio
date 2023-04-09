import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="w-full flex flex-col md:flex-row justify-around items-center md:items-start py-10">
      <div class="w-4/5 md:w-1/3 flex flex-col items-center justify-start md:items-start">
        <h2 class="my-4 font-bold hover:bg-clip-text hover:bg-button-grad hover:text-transparent cursor-pointer">
          Ismailcourr.<span class="text-xs">tech © {serverTime.value.date}</span>
        </h2>
        <p class="text-center md:text-left">I'm a Frontend Developer based in Morocco. I'm passionate about building web applications and I love to learn new things.</p>
      </div>
      <div class="w-4/5 md:w-1/3 flex flex-col items-center justify-start md:justify-end md:items-end">
        <ul class="flex mt-10 md:my-2 font-bold">
          <li class="mx-2 border-b-2 hover:border-b-purple-800 border-b-transparent duration-300">
            <a href="#home">Home</a>
          </li>
          <li class="mx-2 border-b-2 hover:border-b-purple-800 border-b-transparent duration-300">
            <a href="#about">About Me</a>
          </li>
          <li class="mx-2 border-b-2 hover:border-b-purple-800 border-b-transparent duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul class="flex my-2">
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700" target="_blank" href="https://www.instagram.com/ismailco96/">
              <i class="text-gray-600 fab fa-instagram fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" target="_blank" href="https://twitter.com/ismailcourr">
              <i class="text-gray-600 fab fa-twitter fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" target="_blank" href="https://www.linkedin.com/in/ismailcourr/">
              <i class="text-gray-600 fab fa-linkedin-in fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2 duration-700 text-center flex justify-center items-center h-full w-full" target="_blank" href="https://github.com/Ismailco">
              <i class="text-gray-600 fab fa-github fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
});
