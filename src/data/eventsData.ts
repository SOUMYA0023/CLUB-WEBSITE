export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'upcoming' | 'past';
  image: string;
  category: string;
  participants?: number;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Outreach Program – Kendriya Vidyalaya Visit',
    description: 'We’re taking tech beyond the campus! Our outreach program aims to inspire young minds at Kendriya Vidyalaya through interactive sessions, fun demos, and engaging tech talks. It’s all about planting the seeds of innovation early.',
    date: 'To be Declared',
    type: 'upcoming',
    image: '/outreach.png.PNG',
    category: 'Outreach',
    participants: 500
  },
  {
    id: '2',
    title: 'Portfolio Pro – Build. Brand. Breakthrough.',
    description: 'A hands-on technical event designed to help students craft standout portfolios. From GitHub tips to personal branding hacks, Portfolio Pro is your launchpad to showcase skills that speak louder than words.',
    date: 'To be Declared',
    type: 'upcoming',
    image: '/portfolio pro.PNG',
    category: 'Workshop',
    participants: 150
  },
  {
    id: '3',
    title: 'Chatbot Alchemy',
    description: 'An innovative event focused on building intelligent chatbots and exploring conversational AI technologies.',
    date: '2023-11-15',
    type: 'past',
    image: '/chatbot alchemy.jpg',
    category: 'Competition',
    participants: 120
  },
  {
    id: '4',
    title: 'Backcode Battle',
    description: 'Intense coding competition where participants solved complex algorithmic challenges and backend development problems.',
    date: '2023-10-20',
    type: 'past',
    image: '/backcode battle.jpg',
    category: 'Competition',
    participants: 180
  },
  {
    id: '5',
    title: 'Prompt Kraft',
    description: 'Creative event exploring the art of prompt engineering and AI-assisted content creation.',
    date: '2023-09-25',
    type: 'past',
    image: '/prompt kraft.jpg',
    category: 'Workshop',
    participants: 100
  }
];