import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-8">
      <div className="max-w-7xl mx-auto text-white flex flex-col items-center">
        <p className="mb-2">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;