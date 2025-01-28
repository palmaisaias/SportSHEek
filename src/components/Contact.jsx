// If you haven't installed these yet, run:
// npm install react-icons emailjs-com

import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPenFancy,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", story: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
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

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these placeholders with your own EmailJS service/template/publicKey
    const serviceID = "service_XXXXXXXX";
    const templateID = "template_XXXXXXXX";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setAlertMessage("Your story has been submitted successfully!");
        setAlertType("success");
        setIsAlertVisible(true);
        setFormData({ name: "", email: "", story: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Failed to submit story:", error);
        setAlertMessage("Failed to submit your story. Please try again later.");
        setAlertType("error");
        setIsAlertVisible(true);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 bg-gray-50 text-center font-sans relative animate-fadeIn"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-slideInUp text-gray-800">
          Share Your Sports Story
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
          Struggling to talk sports without looking clueless? Share your
          funniest fails, bizarre wins, or any sports shitshows and get featured
          on <strong>sportSHEek</strong>!
        </p>

        <div className="max-w-xl mx-auto w-full px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg animate-scaleUp"
          >
            {/* Name Field */}
            <div className="flex items-center">
              <FaUser className="text-pink-500 mr-3 text-2xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-pink-400 focus:outline-none transition-shadow duration-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center">
              <FaEnvelope className="text-purple-500 mr-3 text-2xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-purple-400 focus:outline-none transition-shadow duration-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Story Field */}
            <div className="flex items-start">
              <FaPenFancy className="text-blue-500 mr-3 text-2xl mt-1" />
              <textarea
                name="story"
                rows="5"
                placeholder="Share your story here..."
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow duration-300"
                value={formData.story}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition-colors animate-pulseOnce ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Story"}
              <FaPaperPlane className="ml-2 animate-bounce" />
            </button>
          </form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
        <div className="absolute bottom-10 right-5 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      </section>

      {/* Alert Notification */}
      {isAlertVisible && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
              alertType === "success"
                ? "bg-green-100 border border-green-200"
                : "bg-red-100 border border-red-200"
            }`}
          >
            <div className="mr-3">
              {alertType === "success" ? (
                <FaCheckCircle className="text-green-600 text-2xl" />
              ) : (
                <FaTimesCircle className="text-red-600 text-2xl" />
              )}
            </div>
            <div
              className={`font-medium ${
                alertType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {alertMessage}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-opacity-30">
              <div
                className={`h-full ${
                  alertType === "success" ? "bg-green-600" : "bg-red-600"
                } animate-progress`}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </>
  );
}

export default Contact;
