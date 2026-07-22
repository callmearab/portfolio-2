import { FaTrophy, FaMedal, FaGlobe } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export const profile = {
  name: 'Samiullah Mohammadi',
  titles: ['Web Developer', 'Educator', 'Youth Leader', 'Author', 'Youth Activist'],
  email: 'arsalanarab.py@gmail.com',
  github: 'https://github.com/callmearab',
  linkedin: 'https://linkedin.com/in/samimuhammadi',
  location: 'Kunduz, Afghanistan',
  dob: '02 Dec 2008',
  bio: `I'm a young software engineer, published author, and youth educator from Kunduz, Afghanistan — simultaneously managing two technical roles, leading four volunteer organizations, and completing advanced international coursework while still a teenager. I combine rare technical depth in full-stack web development and database architecture with demonstrated leadership impact: currently instructing 23 university students in DBMS, directing a non-profit's full technology operations, and serving as a regional ambassador for an international computer science competition. I'm motivated by a singular commitment to expanding access to technology and education across underserved communities.`,
  stats: [
    { value: '100+', label: 'DB Teaching Hours' },
    { value: '70+', label: 'Web Dev Hours' },
    { value: '23', label: 'University Students' },
    { value: '4+', label: 'Organizations Led' },
  ],
}

export const skills = [
  { category: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL', 'MySQL'] },
  { category: 'Databases', items: ['MySQL', 'RDBMS', 'DBMS', 'CRUD System Design', 'Database Architecture'] },
  { category: 'Frameworks', items: ['Laravel', 'Bootstrap', 'jQuery', 'Tailwind CSS'] },
  { category: 'Dev Tools', items: ['Git', 'GitHub', 'XAMPP', 'VS Code', 'IntelliJ', 'PyCharm', 'Chrome DevTools', 'Figma'] },
  { category: 'AI & Data', items: ['Generative AI', 'Data Science & Analytics', 'Web Scraping'] },
  { category: 'Design', items: ['Graphic Design', 'Responsive UI/UX', 'Cross-browser Compatibility'] },
  { category: 'Management', items: ['Project Management', 'Program Planning', 'Team Coordination'] },
  { category: 'Pedagogy', items: ['Curriculum Design', 'Technical Instruction', 'Student Mentoring'] },
]

export const experience = [
  {
    title: 'Database Developer',
    org: 'Peshgam Educational Center',
    location: 'Kunduz, Afghanistan',
    period: 'Mar 2026 – Present',
    points: [
      'Sole database architect for a growing academy — design and maintain CRUD systems and RDBMS infrastructures from the ground up.',
      'Teach MySQL, SQL, DBMS, and RDBMS to 23 university students delivering 10 instructional hours per week — totaling 100+ hours of instruction since March 2026.',
      'Manage Peshgam Academy\'s production database environment, ensuring data integrity, performance, and system reliability.',
      'Introduced structured database naming conventions and optimized query performance, reducing common retrieval bottlenecks.',
    ],
  },
  {
    title: 'Web Development Instructor',
    org: 'Future Bridge NPO Afghanistan',
    location: 'Afghanistan',
    period: 'Sep 2025 – Present',
    points: [
      'Deliver structured curricula in HTML & CSS (5 hrs/week) and JavaScript (4 hrs/week) to cohorts of youth learners — 9 instructional hours per week, 70+ hours delivered to date.',
      'Serve as technical web administrator for futurebridge.ngo — managing content, uptime, and platform performance.',
      'Developed and adapted curriculum materials to suit students with limited prior exposure to computer science.',
    ],
  },
]

export const projects = [
  {
    title: 'Future Bridge Official Website',
    period: 'Sep – Dec 2025',
    link: 'https://futurebridge.ngo',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    description: 'Sole developer — designed and shipped a fully responsive NPO website using HTML5, CSS3, JavaScript & Tailwind CSS, serving hundreds of Afghan youth. Architected structured page layouts, optimized load performance, and ensured full cross-device compatibility.',
    highlight: 'Transformed the organization\'s digital presence, enabling wider outreach to students, donors, and educators.',
  },
  {
    title: 'Database & Backend System',
    period: 'Jan 2026 – Present',
    link: 'https://xirfa.com',
    tags: ['PHP', 'MySQL', 'Backend', 'RDBMS'],
    description: 'Engineered secure, scalable server-side architecture using PHP and MySQL for a live web application. Designed normalised relational database schemas, wrote parameterised queries, and implemented backend business logic.',
    highlight: 'Live production system serving real users.',
  },
]

export const education = [
  {
    degree: 'High School Diploma — Top of Class',
    school: 'Mawlawi Sarajudin Boys High School',
    location: 'Kunduz, Afghanistan',
    period: 'Apr 2021 – Jan 2024',
    points: [
      'Graduated with the highest overall grade in the school two consecutive years (Grade 11 & Grade 12).',
      'Formally recognized as Best Student of the Year by school administration in final year (2023).',
      'Completed studies in a challenging academic environment, demonstrating exceptional resilience and scholarly discipline.',
    ],
  },
]

export const awards: { icon: IconType; title: string; org: string; detail: string; date: string }[] = [
  {
    icon: FaTrophy,
    title: 'Best Student of the Year',
    org: 'Mawlawi Sarajudin Boys High School',
    detail: 'Highest overall grade, entire school',
    date: 'Dec 2023',
  },
  {
    icon: FaMedal,
    title: 'Highest Overall Grade, Grade 11',
    org: 'Mawlawi Sarajudin Boys High School',
    detail: 'Top academic performer',
    date: 'May 2022',
  },
  {
    icon: FaGlobe,
    title: 'ICSC Participation Certificate',
    org: 'International Computer Science Competition',
    detail: 'Qualification Round',
    date: 'Sep 2025',
  },
]

export const leadership = [
  {
    title: 'Regional Ambassador',
    org: 'International Computer Science Challenge (ICSC)',
    location: 'Kunduz',
    period: 'Aug 2025 – Present',
    points: [
      'Represent ICSC across Kunduz province — the regional advocate responsible for student recruitment, coaching, and competition preparation.',
      'Mentor student cohorts through coding challenges, problem-solving rounds, and AI/CS collaborative projects.',
      'Bridge the gap between global computer science competition infrastructure and students in under-resourced communities.',
    ],
  },
  {
    title: 'Junior Ambassador',
    org: 'University of the People (UoPeople)',
    location: 'Remote',
    period: 'Mar 2025 – Present',
    points: [
      'Champion access to tuition-free, U.S.-accredited higher education for Afghan youth who have been denied formal university access.',
      'Guide prospective students through the full admissions pathway from inquiry to enrolment in recognized degree programs.',
    ],
  },
  {
    title: 'Program Manager — General Manager',
    org: 'Future Bridge NPO',
    location: 'Remote',
    period: 'Dec 2024 – Present',
    points: [
      'Oversee all strategic planning, team coordination, and program execution for a youth-focused educational non-profit.',
      'Established operational workflows that improved team efficiency and enabled the organization to scale its program delivery.',
    ],
  },
  {
    title: 'Head of Opportunities Department',
    org: 'Youth for Youth',
    location: 'Remote',
    period: 'Dec 2024 – Present',
    points: [
      'Lead a team responsible for sourcing, vetting, and distributing educational, professional, and development opportunities for Afghan youth.',
      'Manage a systematic curation pipeline ensuring timely and accurate dissemination of scholarship, internship, and training opportunities.',
    ],
  },
  {
    title: 'Administrative Assistant',
    org: 'Environment Protection of Afghanistan',
    location: 'Kunduz',
    period: 'Oct 2023 – Present',
    points: [
      'Planned and facilitated environmental awareness seminars and scientific workshops across schools and community institutions in Kunduz.',
      'Mobilized students and educators toward sustainable practices, contributing to a measurable increase in environmental engagement among youth.',
    ],
  },
]

export const certifications = [
  { title: 'Complete Web Development: HTML, CSS, JS & PHP Projects', issuer: 'Packt', date: 'Feb – Apr 2026', category: 'Web Dev' },
  { title: 'Introduction to Academic Research', issuer: 'University of California, Davis (Coursera)', date: 'Jan – Mar 2026', category: 'Research' },
  { title: 'Programming with Generative AI', issuer: 'IIT Guwahati — Coursera', date: 'Jan 2026', category: 'AI' },
  { title: 'AI Infrastructure and Operations Fundamentals', issuer: 'NVIDIA — Coursera', date: 'Dec 2025', category: 'AI' },
  { title: 'Introduction to Project Management', issuer: 'IBM — Coursera', date: 'Dec 2025', category: 'Management' },
  { title: 'Web Scraping with Python', issuer: 'Duke University — Coursera', date: 'Nov 2025', category: 'Python' },
  { title: 'Introduction to Python', issuer: 'Coursera', date: 'Nov 2025', category: 'Python' },
  { title: 'Data Science & Analytics', issuer: 'HP — Coursera', date: 'Oct 2025', category: 'Data' },
  { title: 'Front-End Web Development', issuer: 'Future Bridge', date: 'Feb – Oct 2025', category: 'Web Dev' },
  { title: 'Arabic Linguistic Qualification Diploma', issuer: 'Madrasa Talimul Islam', date: 'Jan – May 2025', category: 'Language' },
  { title: 'Turkish Language A1', issuer: 'Future Bridge Language Department', date: 'Nov 2025 – Jan 2026', category: 'Language' },
  { title: 'CEFR English Language Program', issuer: 'Halimi Educational Center', date: 'Jun 2025 – Jan 2026', category: 'Language' },
]

export const conferences = [
  {
    title: 'Astronomy and Space Conference',
    org: 'Future Bridge',
    location: 'Kunduz, Afghanistan',
    date: 'Feb 2025',
    detail: 'Active contributor and presenter at a regional science conference; engaged participants in astronomy and space science discourse.',
  },
  {
    title: 'The Smart Future: AI and Humanity\'s Next Chapter',
    org: 'Youth for Youth (International Program)',
    location: 'Online',
    date: 'Dec 2024',
    detail: 'Completed an intensive 10-session program featuring lectures from international professors and industry AI specialists. Appointed Team Leader for the group capstone project focused on machine automation and AI implementation.',
  },
]

export const languages = [
  { name: 'Persian (Dari)', level: 100, label: 'Native' },
  { name: 'English', level: 88, label: 'C1 Advanced' },
  { name: 'Pashto', level: 92, label: 'C2/B2' },
  { name: 'Arabic', level: 60, label: 'B2 Reading' },
  { name: 'German', level: 20, label: 'A1–A2' },
  { name: 'Turkish', level: 12, label: 'A1' },
]

export const testimonials = [
  {
    quote: "I've mentored Samiullah for over two years teaching full-stack development, and he consistently operated above the expected academic level. He led front-end architecture for a Student Management System now used by 2,000+ active students — his team's project was evaluated best among 25 competing entries, and he independently optimized CRUD operations roughly 40% more efficiently than peer implementations.",
    name: 'Mohammad Wasiq Nazari',
    title: 'Software Engineering Instructor, Kunduz University · CEO, Xirfa Database Development',
  },
  {
    quote: "Samiullah is a dedicated and visionary technologist with proficiency spanning modern software systems, contemporary IT, and even the economics of emerging technology. His interdisciplinary range — combined with a disciplined, ethical, and cooperative character — places him well ahead of many of his peers.",
    name: 'Eng. Ghulam Mohammad Haleem',
    title: 'M.Sc. Computer Science · Administrator & Finance Deputy, Salam University – Kunduz',
  },
  {
    quote: "Since 2024, Samiullah has served as our volunteer Project Manager and Head of Technology & Innovation. He coordinated a science conference reaching 250+ students, taught our HTML, CSS, and programming courses, and led our official website from concept to launch — handling complex responsibilities with adaptability and composure throughout.",
    name: 'Ahmad Ramin Afzali',
    title: 'CEO & Founder, Future Bridge Nonprofit Organization',
  },
]

export const publications = [
  { title: 'Jawar-e-Beryan', type: 'Book', status: 'Forthcoming' },
  { title: 'Me in Inifi', type: 'Book', status: 'Forthcoming' },
]
