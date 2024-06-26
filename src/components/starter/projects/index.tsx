import { component$ } from '@builder.io/qwik';
import Project from './project';

export default component$(() => {
  const projects = [
    {
      name: 'ParkInn',
      desc: 'Find a parking spot near you.',
      featuredImage: '/projects/parkinn.webp',
      technologies: ['Front-end', 'PWA', 'React', 'Tailwind', 'Redux', '.NET'],
      linkToLiveVersion: 'https://parkinn-frontend.pages.dev/',
      linkToSource: 'https://github.com/Co-Lab-You-Belong-in-Tech/Parkinn-frontend',
    },
    {
      name: 'Postcare',
      desc: 'This is a doctor appointment app built in collaboration white "David" a fellow software developer. The users can create an account or log in, to have access to a dashboard with all information, also the app has a chat functionality and a way to get todo tasks from the doctor',
      featuredImage: '/projects/postcare.webp',
      technologies: ['Front-end', 'React', 'Tailwind', 'Redux', 'Laravel'],
      linkToLiveVersion: 'https://postcare.pages.dev/',
      linkToSource: 'https://github.com/PostOP-app/Postcare-app',
    },
    {
      name: 'Doctor Appointment',
      desc: 'Book an appointment with your doctor, choose a date and time. This project was built with a Mobile-first design perspective and it is mobile responsive. The main technologies for the front end are React and Redux with tailwind css for styling, for the back end, it is built with Ruby on Rails and postgresql.',
      featuredImage: '/projects/doctor_app.webp',
      technologies: ['Full-stack', 'React', 'Tailwind', 'Rails', 'Postgresql'],
      linkToLiveVersion: 'https://booking-app1.netlify.app/',
      linkToSource: 'https://github.com/CodeX-computing/Booker-Front-End/',
    },
    {
      name: 'Marock music festival',
      desc: "This project was built with a Mobile-first design perspective and it's mobile responsive. for the design, the main technologies in CSS are flexbox and media query. The Festival was inspired by the Boulevard urban music festival in Morocco.",
      featuredImage: '/projects/marock.webp',
      technologies: ['Front-end', 'HTML/CSS', 'JavaScript'],
      linkToLiveVersion: 'https://ismailco.github.io/First-capstone-project_Conference-page/',
      linkToSource: 'https://github.com/Ismailco/First-capstone-project_Conference-page',
    },
    {
      name: 'Film Guru',
      desc: "This project was built in colaborations with jhonathan. We had to select an API (OMDb API) that provides data about Movies and then build the webapp around it. The webapp has 2 user interfaces, it's mobile responsive",
      featuredImage: '/projects/movies_guru.webp',
      technologies: ['Front-end', 'HTML/CSS', 'JavaScript', 'API'],
      linkToLiveVersion: 'https://jssol.github.io/api-based-webapp/',
      linkToSource: 'https://github.com/Ismailco/Movies-Guru',
    },
    // {
    //   name: 'Space travel Hub',
    //   desc: 'This is a dummy website for company that provides commercial and scientific space travel sercises. This application will allow users to book rockets and join selected space missions.',
    //   featuredImage: '/projects/space_travel.webp',
    //   technologies: ['Front-end', 'HTML/CSS', 'JavaScript', 'React'],
    //   linkToLiveVersion: 'https://morning-sands-55154.herokuapp.com/',
    //   linkToSource: 'https://github.com/Ismailco/space-travel',
    // },
    {
      name: 'Budget saver',
      desc: 'This app is a budget saver app. It allows users to save their budget and track their expenses. It has a login system and a registration system, and it has a user dashboard that shows the user their budget and expenses. built with Ruby on Rails, and postgresql.',
      featuredImage: '/projects/budget_saver.webp',
      technologies: ['Full-stack', 'Ruby on rails', 'Postgresql'],
      linkToLiveVersion: 'https://budget-saver.fly.dev/',
      linkToSource: 'https://github.com/Ismailco/budget-saver-new',
    },
    // {
    //   name: 'Math magicians',
    //   desc: 'This is my first react.js App, that I build while learning React. The App has the functionality of Calculator and some mathematic quotes.',
    //   featuredImage: '/projects/math_magicians.webp',
    //   technologies: ['Front-end', 'HTML/CSS', 'React', 'Javascript'],
    //   linkToLiveVersion: 'https://mathmagician2022.netlify.app/',
    //   linkToSource: 'https://github.com/Ismailco/math-magicians',
    // },
  ];

  return (
    <section id="projects" class="w-full flex flex-col justify-center items-center my-10">
      <h2 class="font-bold text-3xl xl:text-4xl mb-10">My Projects</h2>
      <section class="w-5/6 grid grid-cols-1 xl:grid-cols-3 gap-10 grid-flow-row place-content-center place-items-center">
        {projects.map((project) => (
          <Project key={project.name} name={project.name} image={project.featuredImage} source={project.linkToSource} live={project.linkToLiveVersion} tech={project.technologies} />
        ))}
      </section>
    </section>
  );
});
