export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Soumya Suman Kar',
    role: 'President',
    department: 'Leadership',
    image: '/president.jpg',
    linkedin: 'https://www.linkedin.com/in/soumya-kar-ba1241293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/SOUMYA0023?tab=following'
  },
  {
    id: '2',
    name: 'Anuska Dasgupta',
    role: 'Vice President',
    department: 'Leadership',
    image: '/vice president.JPG',
    linkedin: 'https://www.linkedin.com/in/anuska-dasgupta-232a30293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: ''
  },
  {
    id: '3',
    name: 'Ankur Gohain',
    role: 'Secretary',
    department: 'Leadership',
    image: '/secretary.JPG',
    linkedin: 'https://www.linkedin.com/in/ankur-gohain-8987032a5/',
    github: 'https://github.com/Kill-JoyCoder'
  },
  {
    id: '4',
    name: 'I.Suvidha',
    role: 'Vice Secretary',
    department: 'Leadership',
    image: '/vice secretary.JPG',
    linkedin: 'https://www.linkedin.com/in/ilindrasuvidha/',
    github: 'https://github.com/SuviHub'
  },
  {
    id: '5',
    name: 'Deshvant Raj Gupta',
    role: 'Event Management Lead',
    department: 'Event Management',
    image: '/event management lead.JPG',
    linkedin: 'https://www.linkedin.com/in/deshvant-raj-gupta-4022a3301',
    github: 'https://github.com/deshvantrajgupta'
  },
  {
    id: '6',
    name: 'Kaviyavarshini Ck',
    role: 'Event Management Co Lead',
    department: 'Event Management',
    image: '/event management colead.JPG',
    linkedin: 'https://www.linkedin.com/in/kaviyavarshini-c-k-653b03294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/kaviyack'
  },
  {
    id: '7',
    name: 'Sabrishvarshan',
    role: 'Technical Lead',
    department: 'Technical',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/sabrishvarshan',
    github: 'https://github.com/sabrishvarshan'
  },
  {
    id: '8',
    name: 'Ashu Choudhary',
    role: 'Technical Co Lead',
    department: 'Technical',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/ashuchoudhary',
    github: 'https://github.com/ashuchoudhary'
  },
  {
    id: '9',
    name: 'Neha Panbude',
    role: 'Creative and Content Lead',
    department: 'Creative and Content',
    image: '/creative lead.JPG',
    linkedin: 'https://www.linkedin.com/in/neha-panbude-792017294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Neha-0019'
  },
  {
    id: '10',
    name: 'Sushree Sangita Ray',
    role: 'Creative and Content Co Lead',
    department: 'Creative and Content',
    image: '/creative colead.JPG',
    linkedin: 'https://www.linkedin.com/in/sushree-sangita-ray-314276349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/sushreesangitaray'
  },
  {
    id: '11',
    name: 'Yashmit Rai',
    role: 'Social Media Lead',
    department: 'Social Media',
    image: '/social media lead.JPG',
    linkedin: 'https://linkedin.com/in/yashmitrai',
    github: 'https://github.com/yashmitrai'
  },
  {
    id: '12',
    name: 'Yuvraj Singh',
    role: 'Social Media Co Lead',
    department: 'Social Media',
    image: '/social media colead.JPG',
    linkedin: 'https://www.linkedin.com/in/youwee699?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/youwee69'
  },
  {
    id: '13',
    name: 'Shreya Shree G',
    role: 'Insight Curator',
    department: 'Leadership',
    image: 'https://images.pexels.com/photos/1181324/pexels-photo-1181324.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/shreyashreeg',
    github: 'https://github.com/shreyashreeg'
  },
  {
    id: '14',
    name: 'Samali Das',
    role: 'Ops Log',
    department: 'Leadership',
    image: '/ops log.JPG',
    linkedin: 'https://www.linkedin.com/in/samali-das-aa3005320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/ecco2000'
  }
];

export const departments = ['Leadership', 'Technical', 'Event Management', 'Creative and Content', 'Social Media'];