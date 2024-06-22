import { component$, $ } from '@builder.io/qwik';
import Header from '~/components/starter/header';
import Projects from '~/components/starter/projects';
import Skills from '~/components/starter/skills';
import Contact from '~/components/starter/contact';
import Recomendations from '~/components/starter/recomendations';

export const sendEmail = $(() => {
  window.location = 'mailto:contact@ismailcourr.dev' as any;
});

export default component$(() => {
  return (
    <>
      <Header />
      <div class="w-full h-20 bg-button-grad mt-[100px]"></div>
      <div class="w-full h-32 relative -top-[110px] overflow-hidden flex justify-center cursor-default items-center font-bold text-2xl">
        <p class="-rotate-2 bg-[#f3f3f3] border shadow-md hover:shadow-xl duration-700 min-w-[1000%] h-16 flex justify-center items-center">Web Development ⚡ Frontend Development ⚡ Fullstack Development ⚡ Mobile Development ⚡ Web Development ⚡ Frontend Development ⚡ Fullstack Development⚡ Mobile Development ⚡</p>
      </div>
      <Projects />
      <Recomendations />
      <section class="w-full flex flex-col md:flex-row justify-start md:justify-around items-center py-10 my-10 bg-black text-white">
        <div class="my-4 mx-16 self-start">
          <p class="font-bold bg-clip-text bg-button-grad text-transparent">PROJECTS DONE</p>
          <p class="text-4xl font-bold">10+</p>
        </div>
        <div class="my-4 mx-16 self-start">
          <p class="font-bold bg-clip-text bg-button-grad text-transparent">EXPERIENCE</p>
          <p class="text-4xl font-bold">3+ Years</p>
        </div>
        <div class="my-4 mx-16 self-start">
          <p class="font-bold bg-clip-text bg-button-grad text-transparent">CLIENTS SATISFACTION</p>
          <p class="text-4xl font-bold">100%</p>
        </div>
      </section>
      <Skills />
      <Contact />
    </>
  );
});
