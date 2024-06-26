import React, { useState } from 'react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <p className="text-green-600 text-xl font-semibold">Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;