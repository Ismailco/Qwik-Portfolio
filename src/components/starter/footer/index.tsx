import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex justify-around items-center py-20">
      <div class="flex flex-col justify-center items-start">
        <h2 class="my-4 font-bold hover:bg-clip-text hover:bg-button-grad hover:text-transparent cursor-pointer">
          Ismailcourr.<span class="text-xs">tech © {serverTime.value.date}</span>
        </h2>
        <p class="my-4 w-1/2">I'm a Frontend Developer based in Morocco. I'm passionate about building web applications and I love to learn new things.</p>
      </div>
      <div class="flex flex-col justify-center items-end">
        <ul class="flex my-4">
          <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
            <a href="#">Home</a>
          </li>
          <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
            <a href="#">About Me</a>
          </li>
          <li class="mx-4 border-b-2 hover:border-b-purple-800 border-b-transparent">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul class="flex my-4">
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2" target="_blank" href="https://www.instagram.com/ismailco96/">
              <i class="text-gray-600 fab fa-instagram fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2" target="_blank" href="https://twitter.com/ismailcourr">
              <i class="text-gray-600 fab fa-twitter fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2" target="_blank" href="https://www.linkedin.com/in/ismailcourr/">
              <i class="text-gray-600 fab fa-linkedin-in fa-xl"></i>
            </a>
          </li>
          <li class="bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
            <a class="bg-[#f3f3f3] hover:bg-[#f3f3f3]/70 rounded-full p-2" target="_blank" href="https://github.com/Ismailco">
              <i class="text-gray-600 fab fa-github fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* <span>{serverTime.value.date}</span> */}
    </footer>
  );
});