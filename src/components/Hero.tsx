  import React from 'react';
import { ArrowRight, Users, Code, Trophy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={ref} className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              INTELLECTS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Empowering Innovation Through Technology
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Join SRM University's premier technical club where brilliant minds collaborate, 
            innovate, and shape the future of technology together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('join')}
              className="px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Join Our Community</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="px-8 py-4 border-2 border-blue-900 text-blue-900 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200 text-lg font-semibold"
            >
              View Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition duration-300">
              <Users className="h-12 w-12 text-blue-900 dark:text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Members</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition duration-300">
              <Code className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition duration-300">
              <Trophy className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">25+</h3>
              <p className="text-gray-600 dark:text-gray-300">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;