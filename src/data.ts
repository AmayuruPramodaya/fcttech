export interface TeamMember {
  id: string;
  name: string;
  role: string;
  role1?: string;
  category: 'visionary' | 'lead' | 'member';
  bio?: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ValueDetail {
  id: string;
  title: string;
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Visionary Guidance
  {
    id: 'prof-dammika',
    name: 'Prof. Dammika Weerasinghe',
    role: 'Dean - Faculty of Computing and Technology',
    category: 'visionary',
    bio: 'FCT Technologies is where ambition meets expertise — a powerhouse of driven undergraduate developers crafting robust digital solutions under world-class academic leadership, for clients who expect nothing less than excellence.',
    imageUrl: '/assets/team/prof-dammika.jpeg'
  },
  {
    id: 'dr-pradeep',
    name: 'Dr. Pradeep Samarasekare',
    role: 'Director of Industry Interaction Cell',
    category: 'visionary',
    bio: 'FCT Technologies is where ambition meets expertise — a powerhouse of driven undergraduates crafting robust digital solutions under world-class academic leadership, for clients who expect nothing less than excellence.',
    imageUrl: '/assets/team/dr-pradeep.jpeg'
  },
  {
    id: 'dr-muditha',
    name: 'Dr. Muditha Thisera',
    role: 'Director of FCT Technologies',
    category: 'visionary',
    bio: 'FCT Technologies is where ambition meets expertise — a powerhouse of driven undergraduates crafting robust digital solutions under world-class academic leadership, for clients who expect nothing less than excellence.',
    imageUrl: '/assets/team/dr-muditha.jpeg'
  },
  // FCT Technologies Leads
  {
    id: 'mr-akash',
    name: 'Mr. Akash Tharuka',
    role: 'Lecturer at Faculty of Computing and Technology',
    category: 'lead',
    imageUrl: '/assets/team/mr-akash.jpeg'
  },
  {
    id: 'ms-hirushi',
    name: 'Ms. Hirushi Nawanjana',
    role: 'Lecturer at Faculty of Computing and Technology',
    category: 'lead',
    imageUrl: '/assets/team/ms-hirushi.jpeg'
  },
  {
    id: 'mr-loch',
    name: 'Mr. Loch Arachchige',
    role: 'UX Engineering Lead at FCT Technologies',
    category: 'lead',
    imageUrl: '/assets/team/mr-loch.jpeg'
  },
  // Our Team
  { id: 'chames', name: 'Chames Dinuka', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/chames.jpeg' },
  { id: 'janishka', name: 'Janishka Madushan', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/janishka.jpeg' },
  { id: 'tharupathi', name: 'Tharupathi Bandara', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/tharupathi.png' },
  { id: 'pathindu', name: 'Pathindu Dananidu', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/pathindu.jpeg' },
  { id: 'sajnu', name: 'Sajnu Mendis', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/sajnu.jpeg' },
  { id: 'thinul', name: 'Thinul Ranmuthu', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/thinul.jpeg' },
  { id: 'salik', name: 'M.R.M Salik', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/salik.jpeg' },
  { id: 'sandeepa', name: 'Sandeepa Thisath', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/sandeepa.png' },
  { id: 'lakmina', name: 'Lakmina Rubasinghe', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/lakmina.png' },
  { id: 'kisara', name: 'Kisara Beddawala', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/kisara.jpeg' },
  { id: 'ravindu', name: 'Ravindu Kalhara', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/ravindu.png' },
  { id: 'chathuranga', name: 'R.P.D. Chathuranga', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/chathuranga.jpeg' },
  { id: 'samindra', name: 'Samindra Herath', role: 'Network Analyst - Intern', category: 'member', imageUrl: '/assets/team/samindra.png' },
  { id: 'vidmal', name: 'Vidmal Senanayake', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/vidmal.jpeg' },
  { id: 'amayuru', name: 'Amayuru Pramodaya', role: 'Software Engineer - Intern', category: 'member', imageUrl: '/assets/team/amayuru.jpeg' }
];

export const PROJECTS: Project[] = [
  {
    id: 'rgms',
    title: 'Research Grant Management System',
    description: 'An end-to-end research proposal handling, verification, tracking, and grant allocation ecosystem built directly for university excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 'ims',
    title: 'Intern Management System',
    description: 'Automating excellence through sophisticated CI/CD frameworks, performance tracking, and direct student mentorship coordination systems.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 'ims2',
    title: 'Precision Devops Pipeline',
    description: 'CI/CD automation pipelines ensuring zero-defect deployments and optimal service mesh scalability.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800&h=500'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'We develop intelligent solutions using artificial intelligence and machine learning technologies to supercharge industrial process flows.'
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'We design and develop responsive websites and powerful web applications with modern technologies to deliver high reliability.'
  },
  {
    id: 'devops',
    title: 'DevOps Services',
    description: 'We automate deployment pipelines and optimize infrastructure for faster and more efficient delivery with industry-standard reliability.'
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'We create high-performance Android and iOS applications with intuitive and user-friendly interfaces for seamless interactions.'
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'We craft visually appealing and user-centered designs that deliver seamless digital experiences across multiple touchpoints.'
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    description: 'We build tailored software solutions that align with your unique business goals and operational requirements without high-overhead costs.'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'We implement secure, scalable, and reliable cloud infrastructure to support business growth and continuous availability.'
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'We design and manage secure, optimized databases for efficient data storage, partitioning, indexing, and swift query retrieval.'
  },
  {
    id: 'api',
    title: 'API Development & Integration',
    description: 'We build custom RESTful and GraphQL APIs and integrate third-party services to seamlessly connect and streamline your microservices.'
  },
  {
    id: 'qa',
    title: 'Quality Assurance & Testing',
    description: 'We perform comprehensive manual and automated end-to-end testing to ensure software quality, extreme performance, and security.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'We provide ongoing updates, 24/7 server monitoring, and prompt technical support to keep your critical business systems running smoothly.'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'We offer expert strategic guidance to help organizations adopt the right technologies, methodologies, and framework architectures.'
  }
];

export const GENERAL_SERVICES: ServiceDetail[] = [
  {
    id: 'design-dev',
    title: 'Design & Development Services',
    description: 'Intuitive, user-centered, and visually engaging UI/UX designs crafted to deliver exceptional digital experiences across mobile, desktop, and web.'
  },
  {
    id: 'infra-integration',
    title: 'Infrastructure & Integration Services',
    description: 'Automated, scalable, and reliable DevOps solutions and cloud deployments designed to accelerate development cycles and boost reliability.'
  },
  {
    id: 'quality-ai',
    title: 'Quality, AI & Consulting Services',
    description: 'Custom, responsive, and high-performance web systems and AI integrations designed to power modern businesses with intelligent insights.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: '"Intuitive, user-centered, and visually engaging UI/UX designs crafted to deliver exceptional digital experiences. Working with FCT Technologies was seamless, resulting in outstanding delivery."',
    author: 'R.P.D. Chathuranga',
    role: 'Senior Project Lead'
  },
  {
    id: 't2',
    quote: '"From scalable backend systems to brilliant user interfaces, their team combines academic rigor with hands-on technical solutions. Fully recommended for enterprise scale architectures."',
    author: 'R.P.D. Chathuranga',
    role: 'Senior Project Lead'
  },
  {
    id: 't3',
    quote: '"Outstanding technical quality, seamless continuous integration pipelines, and brilliant customer service throughout the entire software development lifecycle."',
    author: 'R.P.D. Chathuranga',
    role: 'Senior Project Lead'
  }
];

export const VALUES: ValueDetail[] = [
  {
    id: 'v1',
    title: 'Uncompromising Precision',
    description: 'Details are not just details; they make the product. We obsess over the pixel and the byte to ensure flawless execution across all viewports.'
  },
  {
    id: 'v2',
    title: 'Radical Clarity',
    description: 'Complexity is the enemy. We strive to simplify the intricate, making the most advanced tools feel thoroughly intuitive and highly accessible.'
  },
  {
    id: 'v3',
    title: 'Masterful Design',
    description: 'Aesthetics and function are inseparable. We build systems that are as beautiful to gaze upon as they are secure and structurally robust.'
  }
];

// Use string paths for images to avoid module resolution/type errors in environments
// where image modules are not declared. Adjust if your build supports importing images.
const lab1 = '../assets/lab-images/lab-1.jpeg';
const lab2 = '../assets/lab-images/lab-2.jpeg';
const lab3 = '../assets/lab-images/lab-3.jpeg';
const lab4 = '../assets/lab-images/lab-4.jpeg';

export const LAB_IMAGES = [lab1, lab2, lab3, lab4];