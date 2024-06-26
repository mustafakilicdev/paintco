import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);



  if (state.succeeded) {
    return <p className="text-green-600 text-xl font-semibold">Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            id="name"
            type="text" 
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email Address:</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Contact;