import { component$ } from '@builder.io/qwik';

interface RecommendationProps {
  name: string;
  picture: string;
  text: string;
}

export const Recommendation = component$<RecommendationProps>(({ name, picture, text }) => {
  return (
    <div class="flex flex-col m-2 xl:w-1/3 items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img src={picture} alt={`${name}'s picture`} class="h-1/2 xl:w-16 xl:h-16 rounded-full object-cover" />
      <div class="h-1/2 text-center">
        <h3 class="text-xl font-semibold">{name}</h3>
        <p class="text-gray-600">{text}</p>
      </div>
    </div>
  );
});
