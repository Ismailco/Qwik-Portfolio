import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
// import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer';
import Navbar from '~/components/starter/navbar';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().getFullYear(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Navbar />
        <Slot />
      </main>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
});
