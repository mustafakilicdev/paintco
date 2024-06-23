import React from 'react';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Painting Company</h1>
      <p className="text-xl">We offer high-quality painting services for your home and business.</p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Professional and experienced painters</li>
          <li>High-quality materials and techniques</li>
          <li>Timely project completion</li>
          <li>Competitive pricing</li>
        </ul>
      </div>
      <Testimonials />
    </div>
  );
}

export default Home;