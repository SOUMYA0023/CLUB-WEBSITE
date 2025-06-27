import React from 'react';
import { Users, Lightbulb, Code, Heart, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const JoinUs: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits = [
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Learn cutting-edge technologies through hands-on workshops and real projects'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded peers and industry professionals'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Work on innovative projects and contribute to open-source initiatives'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Be part of a supportive community that grows together'
    }
  ];

  const departments = [
    {
      name: 'Technical',
      description: 'Full-stack development, AI/ML, and emerging technologies',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning']
    },
    {
      name: 'Event Management',
      description: 'Planning and executing technical events and workshops',
      skills: ['Project Management', 'Coordination', 'Logistics', 'Leadership']
    },
    {
      name: 'Creative and Content',
      description: 'Creative design, content creation, and visual communication',
      skills: ['Figma', 'Adobe Suite', 'Content Writing', 'Graphic Design']
    },
    {
      name: 'Social Media',
      description: 'Digital marketing, social media management, and community engagement',
      skills: ['Social Media', 'Content Strategy', 'Analytics', 'Branding']
    }
  ];

  return (
    <section id="join" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join <span className="text-blue-900 dark:text-blue-400">INTELLECTS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Become part of a vibrant community of innovators, creators, and problem-solvers. 
              Together, we're shaping the future of technology.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Departments Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Choose Your Department
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {dept.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {dept.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dept.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruitment Process */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-600 rounded-xl p-8 mb-16 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              Recruitment Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Application</h4>
                <p className="text-white/80">
                  Fill out our application form with your interests and background
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Interview</h4>
                <p className="text-white/80">
                  Friendly conversation about your goals and how you can contribute
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Welcome</h4>
                <p className="text-white/80">
                  Join our community and start your journey with INTELLECTS
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Applications are open for the 2024 recruitment cycle. Don't miss your chance 
                to be part of something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://forms.google.com/intellects-recruitment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 text-lg font-semibold"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 border-2 border-blue-900 text-blue-900 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200 text-lg font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;