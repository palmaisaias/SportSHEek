import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_8g8l37s';     // Your Service ID
    const templateID = 'template_va7kegi';   // Your Template ID
    const publicKey = 'JPQxpxvPky1uNQ74r';   // Your Public Key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-animated text-center font-sans relative animate-fadeIn"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp text-gray-800">
        Contact Me
      </h2>
      <div className="max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg animate-scaleUp"
        >
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-3 text-2xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-3 text-2xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-start">
            <FaEnvelope className="text-blue-500 mr-3 text-2xl mt-1" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors animate-pulseOnce ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FaPaperPlane className="ml-2 animate-bounce" />
          </button>
        </form>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-10 right-5 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default Contact;