import { component$ } from '@builder.io/qwik';

interface ServiceDetailProps {
  details: string[];
}

interface ServiceOfferingProps {
  name: string;
  technologies: string[];
  details: string[];
}

interface ServiceCategoryProps {
  category: string;
  offerings: ServiceOfferingProps[];
}

interface ServiceListProps {
  services: ServiceCategoryProps[];
}

const ServiceDetail = component$<ServiceDetailProps>(({ details }) => {
  return (
    <ul class="list-disc list-inside ml-4">
      {details.map((detail, index) => (
        <li key={index} class="text-gray-700">
          {detail}
        </li>
      ))}
    </ul>
  );
});

const ServiceOffering = component$<ServiceOfferingProps>(({ name, technologies, details }) => {
  return (
    <div class="mb-6 border w-1/3 p-4 rounded-xl mr-4 shadow shadow-md hover:shadow-sm bg-white">
      <h3 class="text-xl font-semibold">{name}</h3>
      <p class="text-gray-600">Technologies: {technologies.join(', ')}</p>
        <ServiceDetail details={details} />
    </div>
  );
});

const ServiceCategory = component$<ServiceCategoryProps>(({ category, offerings }) => {
  return (
    <div class="mb-8 py-4">
      <h2 class="text-2xl font-bold mb-4">{category}</h2>
      <div class="flex justify-start items-stretch">
        {offerings.map((offering, index) => (
          <ServiceOffering key={index} {...offering} />
        ))}
      </div>
    </div>
  );
});

const ServiceList = component$<ServiceListProps>(({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceCategory key={index} {...service} />
      ))}
    </div>
  );
});

export default ServiceList;
