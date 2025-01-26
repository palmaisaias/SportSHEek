// Install the required packages before using this component:
// npm install react-icons emailjs-com

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (isAlertVisible) {
      timer = setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isAlertVisible]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_8g8l37s';
    const templateID = 'template_va7kegi';
    const publicKey = 'JPQxpxvPky1uNQ74r';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setAlertMessage('Message sent successfully!');
        setAlertType('success');
        setIsAlertVisible(true);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        setAlertMessage('Failed to send message. Please try again.');
        setAlertType('error');
        setIsAlertVisible(true);
        setIsSubmitting(false);
      });
  };

  return (
    <>
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
            {/* Form fields remain the same */}
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

      {/* Enhanced Alert Notification */}
      {isAlertVisible && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
              alertType === 'success'
                ? 'bg-green-100 border border-green-200'
                : 'bg-red-100 border border-red-200'
            }`}
          >
            <div className="mr-3">
              {alertType === 'success' ? (
                <FaCheckCircle className="text-green-600 text-2xl" />
              ) : (
                <FaTimesCircle className="text-red-600 text-2xl" />
              )}
            </div>
            <div className={`font-medium ${alertType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {alertMessage}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-opacity-30">
              <div
                className={`h-full ${
                  alertType === 'success' ? 'bg-green-600' : 'bg-red-600'
                } animate-progress`}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0; }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </>
  );
}

export default Contact;