import React from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    { label: 'Years of Excellence', value: '3+', icon: Target },
    { label: 'Technical Domains', value: '8', icon: Zap },
    { label: 'Industry Partners', value: '2+', icon: Heart },
    { label: 'Alumni Network', value: '20+', icon: Eye }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-900 dark:text-blue-400">INTELLECTS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are the premier technical club at SRM University, fostering innovation, 
              collaboration, and excellence in technology education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl hover:scale-110 transition duration-300 ">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-900 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To create a vibrant ecosystem where students can explore, learn, and innovate 
                  in cutting-edge technologies while building meaningful connections and 
                  contributing to real-world solutions.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl hover:scale-110 transition duration-300">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To be the leading technical community that shapes the next generation of 
                  technology leaders, fostering innovation and excellence in every member's 
                  journey towards technical mastery.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:scale-110 transition duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Organize technical workshops and training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Develop innovative projects and open-source contributions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Host hackathons and coding competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Connect students with industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-900 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide mentorship and career guidance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-purple-600 p-8 rounded-xl text-white hover:scale-110 transition duration-300">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="leading-relaxed">
                  Over the years, INTELLECTS has been instrumental in shaping careers, 
                  fostering innovation, and creating a lasting impact on the tech community 
                  at SRM University and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition duration-300">
                  <Icon className="h-10 w-10 text-blue-900 dark:text-blue-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;