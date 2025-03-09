import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send this data to a server or email service
    // Here, we'll just simulate the submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">Contact Us</h1>
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-black mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-black mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Send Email
          </button>
        </form>

        {/* Submission Confirmation */}
        {submitted && (
          <div className="mt-8 text-center text-green-600 font-semibold">
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
