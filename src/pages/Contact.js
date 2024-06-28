import React, { useState } from 'react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  if (isSubmitted) {
    return <p className="text-green-600 text-xl font-semibold">Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <form name="contact" method="post" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        {/* Add your form fields here */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;