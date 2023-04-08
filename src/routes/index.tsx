import { component$ } from '@builder.io/qwik';
import Header from '~/components/starter/header';
import Projects from '~/components/starter/projects';

export default component$(() => {
  return (
    <>
      <Header />
      <div class="w-full h-20 bg-button-grad mt-[100px]"></div>
      <div class="w-full h-32 relative -top-[110px] overflow-hidden flex justify-center cursor-default items-center font-bold text-2xl">
        <p class="-rotate-2 bg-[#f3f3f3] border shadow-md hover:shadow-xl duration-700 min-w-[1000%] h-16 flex justify-center items-center">Web Development ⚡ Frontend Development ⚡ Fullstack Development ⚡ Mobile Development ⚡ Web Development ⚡ Frontend Development ⚡ Fullstack Development⚡ Mobile Development ⚡</p>
      </div>
      <Projects />
      <section class="flex justify-between items-center py-20 px-52 my-10 bg-black text-white">
        <h3 class="font-bold text-4xl">
          Have An Awesome
          <br /> Project Idea? Leat's Discuss
        </h3>
        <button class="bg-button-grad rounded-full font-bold py-12 px-5 border border-transparent hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-700">Contact Me</button>
      </section>
    </>
  );
});
