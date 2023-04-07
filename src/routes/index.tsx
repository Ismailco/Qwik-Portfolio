import { component$ } from '@builder.io/qwik';
import Header from '~/components/starter/header';

export default component$(() => {
  return (
    <>
      <Header />
      <div class="w-full h-20 bg-button-grad mt-[100px]"></div>
      <div class="w-full h-32 relative -top-[110px] overflow-hidden flex justify-center items-center font-bold text-2xl">
        <p class="-rotate-2 bg-[#f3f3f3] border shadow-md min-w-[140%] h-16 flex justify-center items-center">Web Development ⚡ Frontend Development ⚡ Fullstack Development ⚡ Mobile Development ⚡ Web Development ⚡ Frontend Development ⚡ Fullstack Development⚡ Mobile Development ⚡</p>
      </div>
    </>
  );
});
