import React from 'react';

function Services() {
  const services = [
    { title: 'Interior Painting', description: 'Transform your indoor spaces with our expert interior painting services.' },
    { title: 'Exterior Painting', description: 'Enhance your home\'s curb appeal with our durable exterior painting solutions.' },
    { title: 'Commercial Painting', description: 'Professional painting services for offices, retail spaces, and more.' },
    { title: 'Residential Painting', description: 'Customized painting solutions for houses, apartments, and condos.' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;