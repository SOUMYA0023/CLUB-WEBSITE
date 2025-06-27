import React from 'react';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Join Us', href: '#join' }
  ];

  const resourceLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Code of Conduct', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/intellectsclub-srm-ramapuram/', name: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/intellects_srmramapuram?igsh=MWVxcTcxbDlvcWh6YQ==', name: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">INTELLECTS</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering innovation through technology at SRM University. 
              Join our community of passionate developers and tech enthusiasts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <a
                  href="mailto:intellectssrm@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  intellectssrm@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <a
                  href="tel:+919265290747"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  9265290747/ 76673 61497
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  SRM INSTITUTE OF SCIENCE AND TECHNOLOGY , RAMAPURAM , CHENNAI ,600089
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} INTELLECTS - Technical Club, SRM University. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ by INTELLECTS Team
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              This website is affiliated with SRM University. All university policies and guidelines apply.
              INTELLECTS is a registered student organization under SRM University.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;