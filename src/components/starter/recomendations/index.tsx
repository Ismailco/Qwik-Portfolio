import { component$ } from '@builder.io/qwik';
import { Recommendation } from './recommendation';

export const recommendations = [
  {
    name: 'David Chibueze Ndubuisi',
    picture: 'https://media.licdn.com/dms/image/D4D35AQEzJg2v6dHnlA/profile-framedphoto-shrink_100_100/0/1703536802053?e=1719507600&v=beta&t=A8my4QxtYRJLDAwWJo7EzJ4Qe82Hq7ZcM7F09PvcJ-Q',
    text: 'I highly recommend Ismail for any front-end development position. He is an exceptional front-end developer with outstanding technical expertise in HTML, CSS, JavaScript, and React.js. I had the pleasure of working with Ismail on a product where he consistently demonstrated his dedication to delivering high-quality work. He is an excellent team player with exceptional communication and collaboration skills, working closely with other team members to ensure that the project was completed on time and to the highest standards. John is a highly-skilled, diligent, and reliable developer who will be an asset to any team.',
  },
  {
    name: 'Nemwel Nyandoro',
    picture: 'https://media.licdn.com/dms/image/C4D03AQFz5fYtNceFaw/profile-displayphoto-shrink_100_100/0/1648814128427?e=1724284800&v=beta&t=wfqoWpf64mvLQxI7B5T2_JnEGDu2nHi95YlWLDTYA4s',
    text: 'Ismail is an amazing person if you get to know him well. I have had the chance to work with him multiple times while we were students at Microverse and I really enjoyed his work ethic. Ismail has strong technical skills with a solid understanding of the technologies that he is working with and he is never afraid to help out whenever a team member is stuck. He practices the philosophy of Ubuntu demonstrated by his unsatisfaction and unhappiness when a team member is stuck and he makes sure that he puts in his expertise and makes sure it is resolved. I highly recommend Ismail to any software team.',
  },
  {
    name: 'Jonathan Sivahera',
    picture: 'https://media.licdn.com/dms/image/D4D35AQHFpUVq5sv8-Q/profile-framedphoto-shrink_100_100/0/1681659239274?e=1719507600&v=beta&t=ic015A9Lu3_5NFtwBNbfCK6IDey3PGpR-4XRZdrQEcw',
    text: 'Whenever I work with Ismail, I know it is going to be a journey of learning and sharing. Of his many qualities, I found in him someone you can rely on when you find yourself blocked with your tasks. His calmness, composure, and natural communication skills will surely make him a great asset to any team. Aside from his good technical skills, Ismail is very good at team building and conflict management. I will vouch for him for any job position in his abilities.',
  },
  {
    name: 'Souad El mansouri',
    picture: 'https://media.licdn.com/dms/image/D4E35AQHeS-unvxOgEA/profile-framedphoto-shrink_100_100/0/1689673595556?e=1719507600&v=beta&t=RNaTMmNLX-wEOG2lydFD81W1KpZw3QCE7Ve39ASQ6Ws',
    text: 'I had the opportunity to work closely with Ismail, he is a very good team players and I can testify that his communication and collaboration skills are really high. I can say that Ismail is a time-oriented developer who cares about team progress . Highly recommended!',
  },
  {
    name: 'Alexander Oguzie-Ibeh',
    picture: '',
    text: 'I\'ve worked with Ismail a couple of times and have always appreciated every single time I got to work with him. he is a really good team player, and ready to help you when you are struggling with something. his problem-solving skills are really good, he\'s also a fast learner with a goal of always getting the job done before the required deadline. Highly recommended.',
  },
];

export default component$(() => {
  return (
    <div class="container mx-auto p-4 mt-20">
      <h2 class="text-3xl font-bold mb-6 text-center">Recommendations</h2>
      <div class=" xl:flex xl:justify-center xl:items-stretch xl:flex-wrap ">
        {recommendations.map((rec, index) => (
          <Recommendation key={index} name={rec.name} picture={rec.picture} text={rec.text} />
        ))}
      </div>
    </div>
  );
});
