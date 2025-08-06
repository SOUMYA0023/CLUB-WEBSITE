import React, { useState } from 'react';
import { Calendar, Users} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { events } from '../data/eventsData';

const Events: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = events.filter(event => event.type === activeTab);


  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-900 dark:text-blue-400">Events</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us for exciting workshops, competitions, and networking opportunities 
              designed to enhance your technical skills and expand your horizons.
            </p>
          </div>

          {/* Event Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'past'
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-900 text-white text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  {event.type === 'upcoming' && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                        Upcoming
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    {event.participants && (
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.participants} participants
                      </div>
                    )}
                  </div>
                  {event.type === 'upcoming' && (
                    <button className="mt-4 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No {activeTab} events available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;