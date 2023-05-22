import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="skills" class="w-full flex flex-col justify-center items-center my-10">
      {/* <h2 class="font-bold text-3xl xl:text-4xl mb-10">My Skills</h2> */}
      <section class="py-5">
        <ul class="flex justify-center items-center flex-wrap gap-7">
          <li>
            <i class="fab fa-html5 text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-css3-alt text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-js-square text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-react text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-node-js text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-sass text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-bootstrap text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-git-alt text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-github text-8xl"></i>
          </li>
          <li>
            <i class="fab fa-npm text-8xl"></i>
          </li>
        </ul>
      </section>
    </section>
  );
});
