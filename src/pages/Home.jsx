import ExperienceItem from '../components/ExperienceItem'
import orgLogo from '../assets/company_logo.jpeg'
import Hero from '../components/Hero'
import PostPreview from '../components/PostPreview'

// Example imports (adjust paths as per your project)
import targetLogo from '../assets/logos/target.jpg';
import isiLogo from '../assets/logos/isi.jpeg';
import iitbLogo from '../assets/logos/iitb.jpeg';
import merapashuLogo from '../assets/logos/merapashu360.jpeg';
import indmoneyLogo from '../assets/logos/indmoney.jpeg';
import mahindraLogo from '../assets/logos/mahindra.jpeg';
import deserthippeeLogo from '../assets/logos/deserthippee.jpeg';
import ultimateworldLogo from '../assets/logos/ultimateworld.jpeg';
import servotechLogo from '../assets/logos/servotech.jpeg';
import ignitusLogo from '../assets/logos/ignitus.jpeg';
import iicLogo from '../assets/logos/iic.jpeg';

const experiences = [
  {
    company: 'Target',
    logo: targetLogo,
    role: 'Data Scientist',
    type: 'Full-time',
    dates: 'Mar 2024 – Present',
    location: 'Bengaluru, Karnataka, India',
    points: ['Working as a Data Scientist at Target, Bengaluru.'],
    bgColor: '#e3f2fd',
  },
  {
    company: 'Indian Statistical Institute, Kolkata',
    logo: isiLogo,
    role: 'Winter School Student (WSDL 2025) | ECUS',
    type: 'Trainee',
    dates: 'Jan 2025 – Mar 2025',
    location: 'Virtual · Remote',
    points: [
      'Learned about advanced deep learning topics, semi-supervised learning, adversarial attacks, and practical applications like medical image analysis and sports analytics.',
    ],
    bgColor: '#fce4ec',
  },
  {
    company: 'IIT Bombay',
    logo: iitbLogo,
    role: 'Research Engineer',
    type: 'Full-time',
    dates: 'Aug 2023 – Dec 2023',
    location: 'Mumbai, Maharashtra, India · On-site',
    points: [
      'Collaborated with Prof. Virendra Singh on AI powered adaptive cyber defense framework.',
      'Performed literature review on transformer-based intrusion detection systems.',
      'Created problem statements bridging NLP, CV, sequential models, and network data.',
      'Experimented with transformer components using attention on network data.',
    ],
    bgColor: '#e8f5e9',
  },
  {
    company: 'MeraPashu360',
    logo: merapashuLogo,
    role: 'Data Scientist',
    type: 'Full-time',
    dates: 'Jul 2022 – Aug 2023',
    location: 'Gurugram, Haryana, India · On-site',
    points: [
      'Built dashboards to provide actionable insights for stakeholders.',
      'Led App and Customer Analytics using advanced statistical techniques.',
      'Created ETL pipelines for services like EXOTEL, Tata-Tele, and Zoho.',
      'Managed GCP-based data lakes and warehouses.',
      'Built ML models: segmentation, churn prediction, Indic translation, retention.',
      'Worked on operations research modeling and rural location database.',
      'Planned customer campaigns based on lead analysis.',
    ],
    bgColor: '#fff3e0',
  },
  // {
  //   company: 'INDmoney',
  //   logo: indmoneyLogo,
  //   role: 'Software Engineer Intern',
  //   type: 'Internship',
  //   dates: 'Jan 2022 – Jun 2022',
  //   location: 'Gurugram, Haryana, India · Remote',
  //   points: [
  //     'Implemented Slack alerts and optimized system logs.',
  //     'Built a health insurance proposal center increasing conversion 3x.',
  //     'Developed ETL pipelines and services to manage external APIs.',
  //   ],
  //   bgColor: '#e0f7fa',
  // },
  {
    company: 'Mahindra Group',
    logo: mahindraLogo,
    role: 'Data Science Intern',
    type: 'Internship',
    dates: 'Dec 2021 – Feb 2022',
    location: 'Pune, Maharashtra, India · Remote',
    points: [
      'Synchronized data sources to predict cab demand/supply.',
      'Created automated pipelines for data merging and calibration.',
    ],
    bgColor: '#f1f8e9',
  },
  // {
  //   company: 'DesertHippee.com',
  //   logo: deserthippeeLogo,
  //   role: 'Web Development Intern',
  //   type: 'Internship',
  //   dates: 'Jul 2021 – Sep 2021',
  //   location: 'Gujarat, India · Remote',
  //   points: [
  //     'Designed websites and maintained codebases to meet client needs.',
  //     'Developed browser-compliant JavaScript features.',
  //     'Collaborated with stakeholders to enhance web presence.',
  //   ],
  //   bgColor: '#f9fbe7',
  // },
  // {
  //   company: 'Ultimate World',
  //   logo: ultimateworldLogo,
  //   role: 'Backend Development Intern',
  //   type: 'Internship',
  //   dates: 'May 2021 – Jul 2021',
  //   location: 'Virtual · Remote',
  //   points: [
  //     'Built event scheduling modules and optimized backend logic.',
  //     'Designed databases for new UVE features.',
  //     'Streamlined user data flow and logic integration.',
  //   ],
  //   bgColor: '#fbe9e7',
  // },
  {
    company: 'Servotech Power Systems',
    logo: servotechLogo,
    role: 'Project Intern',
    type: 'Internship',
    dates: 'May 2021 – Jul 2021',
    location: 'On-site',
    points: [
      'Reverse engineered and prototyped oxygen concentrators (5L/10L).',
      'Designed control circuits for pneumatic valve actuation.',
    ],
    bgColor: '#e8eaf6',
  },
  {
    company: 'Ignitus',
    logo: ignitusLogo,
    role: 'NLP Intern / Team Member',
    type: 'Internship',
    dates: 'May 2020 – Nov 2020',
    location: 'Pittsburgh, USA · Remote',
    points: [
      'Performed sentiment analysis on LMS chat data.',
      'Processed and cleaned proxy data sources.',
      'Built pipelines to automate dataset merging.',
    ],
    bgColor: '#f3e5f5',
  },
  {
    company: 'Institution’s Innovation Council - DDUC',
    logo: iicLogo,
    role: 'Summer School Student',
    type: 'Trainee',
    dates: 'Jul 2020',
    location: 'Virtual · Remote',
    points: [
      'Completed summer school on signal processing and ML.',
      'Certificate No: 2020/MHRDIICDDUC/Online Summer School/July/4',
    ],
    bgColor: '#edeef0',
  },
];


const posts = [
  // {
  //   title: 'My AI Journey',
  //   date: '2025-05-01',
  //   summary: 'A reflection on my deep learning and AI exploration...',
  // },
  // {
  //   title: 'Projects That Matter',
  //   date: '2025-03-22',
  //   summary: 'An overview of impactful work I’ve contributed to recently...',
  // },
]


function Home() {
  return (
    <>
      <Hero />
      <section>
        {posts.map((post, i) => (
          <PostPreview key={i} {...post} />
        ))}
      </section>
      <Experience />
    </>
  )
}

function Experience() {
  return (
    <section>
      <h2>Work Experience</h2>
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  )
}

export default Home;