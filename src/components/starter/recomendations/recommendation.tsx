import { component$ } from '@builder.io/qwik';

interface RecommendationProps {
  name: string;
  picture: string;
  text: string;
}

export const Recommendation = component$<RecommendationProps>(({ name, picture, text }) => {
  return (
    <div class="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img src={picture} alt={`${name}'s picture`} class="w-16 h-16 rounded-full object-cover" />
      <div>
        <h3 class="text-xl font-semibold">{name}</h3>
        <p class="text-gray-600">{text}</p>
      </div>
    </div>
  );
});
