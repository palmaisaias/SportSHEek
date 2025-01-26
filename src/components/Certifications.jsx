import React from 'react';
import { FaCertificate, FaUniversity } from 'react-icons/fa';

function Certifications() {
  const certifications = [
    {
      name: 'CompTIA A+ Certification',
      status: 'In Progress',
      expectedCompletion: 'April 2025',
    },
    {
      name: 'CompTIA Security+ Certification',
      status: 'In Progress',
      expectedCompletion: 'April 2025',
    },
    {
      name: 'Full Stack Development & Software Engineering Certificates',
      organization: 'Coding Temple',
      subCerts: [
        'Frontend Development Certification',
        'Backend Development Certification',
        'Backend Specialization Certification'
      ]
    },
    {
      name: 'Software Developer Certification',
      organization: 'CoLab',
    },
  ];

  const education = [
    {
      name: 'University of California, Irvine',
      details: 'Relevant Coursework',
    },
    {
      name: 'University of California, Riverside',
      details: 'Relevant Coursework',
    },
    {
      name: 'Mt. San Antonio College',
      details: 'Relevant Coursework',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 bg-gradient-animated text-center font-sans relative animate-fadeIn"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp text-gray-800">
        Certifications & Education
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Certifications Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow animate-scaleUp">
          <div className="flex items-center justify-center mb-6">
            <FaCertificate className="text-yellow-500 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-fadeIn">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-100 p-4 rounded transition-all hover:bg-gray-200 animate-slideInUp delay-100"
              >
                <span className="font-medium text-lg">{cert.name}</span>
                {cert.status && (
                  <span className="text-sm text-gray-600">
                    {cert.status} (Expected Completion: {cert.expectedCompletion})
                  </span>
                )}
                {cert.organization && (
                  <span className="text-sm text-gray-600">{cert.organization}</span>
                )}
                {cert.subCerts && (
                  <div className="mt-2 space-y-2">
                    {cert.subCerts.map((subCert, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-center text-sm text-gray-600"
                      >
                        <span className="mx-1 text-xs">•</span>
                        {subCert}
                        <span className="mx-1 text-xs">•</span>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow animate-scaleUp">
          <div className="flex items-center justify-center mb-6">
            <FaUniversity className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-fadeIn">
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li
                key={index}
                className="flex flex-col bg-gray-100 p-4 rounded transition-all hover:bg-gray-200 animate-slideInUp delay-200"
              >
                <span className="font-medium text-lg">{edu.name}</span>
                <span className="text-sm text-gray-600">{edu.details}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-5 left-5 w-24 h-24 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-5 right-5 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default Certifications;