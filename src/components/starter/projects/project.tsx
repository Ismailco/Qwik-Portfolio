import { component$ } from '@builder.io/qwik';

type ProjectProps = {
  name: string;
  image: string;
  source: string;
  live: string;
  tech: Array<string>;
};

export default component$(({ name, image, source, live, tech }: ProjectProps) => {
  return (
    <article class="w-96 md:w-full rounded-md border border-gray-300 shadow-md hover:shadow-sm">
      <div class="opacity-0 hover:opacity-100 h-0 w-full relative">
        <div class={`hover:backdrop-blur-sm rounded-md w-full h-52 relative hover:bg-gray-300/70`}>
          <div class="text-center">
            <ul class="flex py-6 justify-center items-center">
              <li class="mr-5 bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
                <a class="bg-[#f3f3f3] hover:bg-button-grad rounded-full p-2 duration-700" target="_blank" href={source}>
                  <i class="text-gray-600 fa-duotone fa-code fa-xl"></i>
                </a>
              </li>
              <li class="ml-5 bg-button-grad mx-1 rounded-full flex justify-center items-center p-0.5">
                <a class="bg-[#f3f3f3] hover:bg-button-grad rounded-full p-2 duration-700" target="_blank" href={live}>
                  <i class="text-gray-600 fa-duotone fa-arrow-up-right-from-square fa-xl"></i>
                </a>
              </li>
            </ul>
            <h3 class="font-bold text-xl">{name}</h3>
            <div class="pt-4">
              {tech.map((item) => (
                <span class="text-xs text-gray-900 border rounded-md mx-1 p-1 bg-white">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img class="w-full h-52 rounded-md" src={image} alt={name} />
    </article>
  );
});
