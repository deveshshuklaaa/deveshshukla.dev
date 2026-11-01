import { educationData } from './education'

const education = educationData[0]

export const personalInfo = {
  name: 'Devesh Shukla',
  title: 'Software & AI/ML Developer',
  tagline: 'Information Technology student building reliable backend systems, applied computer vision pipelines, and embedded hardware control.',
  college: education.institution,
  degree: `${education.degree}, ${education.fieldOfStudy}`,
  fieldOfStudy: education.fieldOfStudy,
  educationStatus: education.status,
  graduationYear: education.graduationYear,
  location: 'Mumbai, India',
  status: 'Open to Software Engineering Roles & ML/Systems Internships',
  graduationDetail: `${education.period} • Available for Full-Time Roles & Internships`,
  email: 'deveshshukla152005@gmail.com',
  github: 'https://github.com/deveshshuklaaa',
  linkedin: 'https://www.linkedin.com/in/devesh-shukla-152864380/',
  leetcode: 'https://leetcode.com/u/deveshshuklaaa/',
  resumeUrl: '/devesh-shukla-resume.pdf',
  about: {
    summary:
      'I am an Information Technology student at K. J. Somaiya Institute of Technology with a strong foundation in computer science and practical software engineering. My work focuses on building dependable systems across the stack: from architecting normalized PostgreSQL schemas and REST APIs in Django, to training temporal neural networks (LSTM) for biomechanical movement analysis, and programming ESP32 microcontrollers for vision-guided pump control in SmartSpray.',
    coreCompetencies: [
      {
        area: 'Backend & Systems',
        highlight: 'RESTful API architecture, relational database design (PostgreSQL, MySQL), ACID transactions, and containerized deployment with Docker.',
      },
      {
        area: 'Applied Machine Learning & Vision',
        highlight: 'Pose landmark kinematics, temporal sequence modeling with PyTorch LSTMs, YOLO detection, and zero-leakage evaluation protocols (LOSO).',
      },
      {
        area: 'Embedded Systems & Hardware Control',
        highlight: 'ESP32 firmware in C++, PWM pump control, serial command coordination, and hardware safety timeouts in SmartSpray.',
      },
    ],
    philosophy: [
      {
        title: 'Rigorous Empirical Validation',
        description:
          'In applied ML and data modeling, benchmark credibility comes first. I use strict subject-aware cross-validation (Leave-One-Subject-Out) to eliminate inter-subject leakage and report honest, defensible metrics rather than cherry-picked numbers.',
      },
      {
        title: 'Architectural Correctness & Reliability',
        description:
          'Whether designing database tables for multi-item inventory billing or managing container lifecycle via Docker APIs, I enforce strong schema boundaries, transaction atomicity, and container isolation.',
      },
      {
        title: 'End-to-End Ownership',
        description:
          'I build across the complete product lifecycle: embedded hardware control, backend business logic, responsive web interfaces, and automated CI/CD deployment pipelines.',
      },
    ],
  },
}
