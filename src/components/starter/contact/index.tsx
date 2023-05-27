import { component$, $, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const formOpen = useSignal(false);

  const handleFormSubmition = $(async (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          window.location.href = '/thank-you';
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const handleContactClick = $(() => {
    formOpen.value = !formOpen.value;
  });

  return (
    <>
      <section id="contact-section" class="w-full flex flex-col md:flex-row justify-start md:justify-around items-center py-10 my-10 bg-black text-white">
        <h3 class="w-3/4 md:w-1/3 font-bold text-3xl mb-10 md:mb-0">
          Have An Awesome
          <br /> Project Idea? Let's Discuss
        </h3>
        <div class="w-3/4 md:w-1/3 flex md:justify-end md:items-center">
          <button class="w-full md:w-fit bg-button-grad rounded-full font-bold py-12 px-4 border border-transparent hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-700" type="button" onClick$={handleContactClick}>
            Contact Me
          </button>
        </div>
      </section>
      <section id="contact-form" class={`${formOpen.value ? 'block' : 'hidden'}`}>
        <div class="w-full flex flex-col md:flex-row justify-start md:justify-around items-center">
          <form id="my-form" action="https://formspree.io/f/mqkooaao" method="POST" class="w-80 md:w-full max-w-xl mt-10 mb-32" onSubmit$={handleFormSubmition} preventdefault:submit>
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-none focus:border-button-grad" id="form-name" name="name" type="text" placeholder="Full Name" required />
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-none focus:border-button-grad mt-5" id="form-email" name="email" type="email" placeholder="Email" required />
            <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-none focus:border-button-grad mt-5" id="form-message" name="message" placeholder="Who can I help you today ☺️?" rows={10} required></textarea>
            <button class="w-full md:w-fit rounded-xl font-bold p-2 border-2 border-gray-300 hover:border-gray-500 hover:bg-clip-text hover:bg-button-grad hover:text-transparent duration-700 mt-5" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
});
