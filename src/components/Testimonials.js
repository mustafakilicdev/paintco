import React from 'react';

function Testimonials() {
  // For now, we'll use static testimonials
  const testimonials = [
    { id: 1, author: "John Doe", text: "Great service!" },
    { id: 2, author: "Jane Smith", text: "Excellent work!" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 rounded-md shadow">
            <p className="italic">"{testimonial.text}"</p>
            <p className="text-right mt-2">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;