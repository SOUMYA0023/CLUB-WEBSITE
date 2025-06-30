import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const achievements = [
    {
      id: '1',
      title: 'Best Technical Club Award',
      description: 'Recognized as the best technical club at SRM University for outstanding contributions to student development.',
      year: '2023',
      category: 'Club Achievement',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      id: '2',
      title: 'National Hackathon Winners',
      description: 'Our team secured first place in the National Student Hackathon with an innovative AI-powered solution.',
      year: '2023',
      category: 'Competition',
      icon: Award,
      color: 'text-blue-500'
    },
    {
      id: '3',
      title: 'Open Source Excellence',
      description: 'Contributed to 50+ open source projects and maintained 10+ repositories with significant community impact.',
      year: '2023',
      category: 'Community',
      icon: Star,
      color: 'text-purple-500'
    },
    {
      id: '4',
      title: 'Industry Partnership Award',
      description: 'Established successful partnerships with leading tech companies for internships and placements.',
      year: '2022',
      category: 'Partnership',
      icon: Medal,
      color: 'text-green-500'
    },
    {
      id: '5',
      title: 'Innovation in Education',
      description: 'Developed innovative learning platforms that have been adopted by multiple educational institutions.',
      year: '2022',
      category: 'Innovation',
      icon: Trophy,
      color: 'text-red-500'
    },
    {
      id: '6',
      title: 'Student Mentorship Excellence',
      description: 'Successfully mentored 200+ students, with 90% placement rate in top tech companies.',
      year: '2022',
      category: 'Mentorship',
      icon: Award,
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-900 dark:text-blue-400">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating our milestones and recognitions that reflect our commitment 
              to excellence and innovation in the technical community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
                  }`}
                  // style={{ transitionDelay: `${index * 10}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                      <Icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.category}
                      </span>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {achievement.year}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900 to-purple-600 rounded-xl p-8 text-white hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Be Part of Our Success Story?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Join INTELLECTS and contribute to our legacy of excellence and innovation.
              </p>
              <button
                onClick={() => {
                  const joinSection = document.getElementById('join');
                  if (joinSection) {
                    joinSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-200"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;