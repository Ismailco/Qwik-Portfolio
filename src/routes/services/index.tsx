import { component$ } from '@builder.io/qwik';
import ServiceList from './service';

export default component$(() => {
  const services = [
    {
      category: 'Web Development',
      offerings: [
        {
          name: 'Full-Stack Web Development',
          technologies: ['MERN Stack (MongoDB, Express.js, React, Node.js)'],
          details: ['Custom web application development', 'Responsive web design', 'Single Page Applications (SPA)', 'Progressive Web Apps (PWAs)', 'Maintenance and support'],
        },
        {
          name: 'Frontend Development',
          technologies: ['React', 'Tailwind CSS'],
          details: ['Custom UI components', 'Responsive design implementation', 'State management with Redux or Context API', 'Tailwind CSS for rapid and responsive UI development'],
        },
        {
          name: 'Backend Development',
          technologies: ['Node.js', 'Express.js', 'Ruby on Rails'],
          details: ['RESTful API development', 'Real-time applications with WebSockets', 'Database design and management', 'Authentication and authorization'],
        },
      ],
    },
    {
      category: 'Mobile App Development',
      offerings: [
        {
          name: 'Cross-Platform Mobile Apps',
          technologies: ['React Native'],
          details: ['Custom mobile app development', 'Cross-platform solutions for iOS and Android', 'Integration with third-party services and APIs', 'Performance optimization and testing', 'Maintenance and support'],
        },
      ],
    },
    {
      category: 'API Development and Integration',
      offerings: [
        {
          name: 'Custom API Development',
          technologies: ['Node.js', 'Express.js', 'Ruby on Rails'],
          details: ['RESTful API design and development', 'GraphQL API development', 'Third-party API integration', 'API documentation and versioning', 'Performance optimization'],
        },
        {
          name: 'Database Solutions',
          technologies: ['MongoDB', 'PostgreSQL'],
          details: ['Database design and architecture', 'Data migration and synchronization', 'Performance tuning and optimization', 'Backup and recovery solutions'],
        },
      ],
    },
  ];

  return (
    <div class="container mx-auto px-4 py-8 flex flex-col justify-start items-center">
      <h1 class="text-3xl font-bold mb-6">My Services</h1>
      <ServiceList services={services} />
    </div>
  );
});
