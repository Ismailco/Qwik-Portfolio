import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex w-full h-[calc(100vh-350px)] top-0 bg-gray-300 justify-center items-center">
      <div class="bg-button-grad p-2 rounded-xl">
        <div class="bg-gray-100 w-[calc(100vw-30vw)] h-52 rounded-xl flex justify-around items-center">
          <img src="/logo-512-512.png" alt="Logo" class="w-32" />
          <div>
            <h1 class="">Your message is received with gratitude! I am currently engaged, but rest assured, I will return to your message soon. Thank you for your patience.</h1>
            <p>I will be back to you </p>
          </div>
        </div>
      </div>
    </div>
  );
});
