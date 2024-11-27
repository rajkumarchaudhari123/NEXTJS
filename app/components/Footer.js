import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        <nav className="my-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="/privacy-policy" className="hover:text-green-500">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-green-500">Terms of Service</a></li>
            <li><a href="/cookie-policy" className="hover:text-green-500">Cookie Policy</a></li>
          </ul>
        </nav>
        <p className="mt-4">We are committed to protecting your data with the highest security standards.</p>
        <p className="mt-2">For any concerns, contact us at: <a href="mailto:email@yourcompany.com" className="text-green-500 hover:underline">email@yourcompany.com</a></p>
        <div className="mt-4">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.facebook.com/yourcompany" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="https://twitter.com/yourcompany" className="text-blue-400 hover:text-blue-600">Twitter</a>
            <a href="https://www.linkedin.com/company/yourcompany" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
          </div>
        </div>
        <p className="mt-4 text-sm">Securely Protected by [Your Security Provider]</p>
      </div>
    </footer>
  );
};

export default Footer;
