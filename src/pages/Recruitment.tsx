import React, { useState } from 'react';
import { User, Mail, Phone, Code, Calendar, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

console.log("Backend URL:", backendUrl);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  year: string;
  branch: string;
  skills: string[];
  experience: string;
  projects: string;
  interests: string[];
  motivation: string;
  availability: string;
  github: string;
  linkedin: string;
  domain:string;
}

const Recruitment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    skills: [],
    experience: '',
    projects: '',
    interests: [],
    motivation: '',
    availability: '',
    github: '',
    linkedin: '',
    domain:''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const skillOptions = [
    'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 
    'Machine Learning', 'Data Science', 'Web Development', 'Mobile Development',
    'Cybersecurity', 'Cloud Computing', 'DevOps', 'UI/UX Design'
  ];

  const interestOptions = [
    'Web Development', 'Mobile Apps', 'AI/ML', 'Data Analytics',
    'Cybersecurity', 'Cloud Technologies', 'IoT', 'Blockchain',
    'Game Development', 'AR/VR', 'Robotics', 'Open Source'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.year) newErrors.year = 'Academic year is required';
    if (!formData.domain) newErrors.domain = 'Domain is required';
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("https://intellects-backend.onrender.com/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
          
        });
        const result = await response.json();
        if (result.result === 'success') {
          setSubmitted(true);
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (error) {
        console.log(formData);
        console.error("Error submitting form:", error);
        alert("There was an error. Please try again.");
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for your interest! We'll get back to you soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce">
            Join Our Technical Club
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to innovate, collaborate, and build amazing projects? Fill out this form to become part of our tech community!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-600" />
                Personal Information
              </h2>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+91 XXXXX XXXXX"
              />
              {errors.phone && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Academic Year *</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.year ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
              </select>
              {errors.year && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.year}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Branch/Department *</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.branch ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Computer Science, Electronics"
              />
              {errors.branch && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.branch}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">GitHub Profile</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="https://github.com/yourusername"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Linkedin Profile</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="https://linkedin.com/yourusername"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Domain *</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.domain ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your year</option>
                <option value="technical">Technical</option>
                <option value="social media">Social Media</option>
                <option value="creative and content">Content and Creative</option>
                <option value="event management">Event Management</option>
              </select>
              {errors.domain && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.domain}</p>}
            </div>

            {/* Technical Skills */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600" />
                Technical Skills
              </h2>
              <p className="text-gray-600 mb-4">Select all the technologies you're familiar with:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                      formData.skills.includes(skill)
                        ? 'bg-blue-600 text-white border-blue-600 transform'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            {/* Projects */}
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Projects & Achievements</label>
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Tell us about your projects, hackathons, competitions, or any technical achievements..."
              />
            </div>

            {/* Interests */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-600" />
                Areas of Interest
              </h2>
              <p className="text-gray-600 mb-4">What areas of technology interest you the most?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                      formData.interests.includes(interest)
                        ? 'bg-purple-600 text-white border-purple-600 transform scale-105'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Motivation */}
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Why do you want to join our technical club? *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                  errors.motivation ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Share your motivation, goals, and what you hope to achieve by joining our club..."
              />
              {errors.motivation && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.motivation}</p>}
            </div>

            {/* Availability */}
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">Availability</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Select your availability</option>
                <option value="high">High (Can participate in most activities)</option>
                <option value="medium">Medium (Can participate regularly)</option>
                <option value="low">Low (Limited time but interested)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
                      <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center mx-auto"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Application
            </button>
            <p className="text-sm text-gray-500 mt-2">* Required fields</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
