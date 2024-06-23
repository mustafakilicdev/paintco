import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const testimonialsRef = ref(database, 'testimonials');
    const unsubscribe = onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const testimonialsList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setTestimonials(testimonialsList);
      }
    });

    return () => unsubscribe();
  }, []);

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