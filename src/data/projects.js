export const projects = [
  {
    id: 'haemophilia-exercise-analysis',
    title: 'Haemophilia Exercise Analysis',
    tagline: 'Pose-Derived Kinematic Feature Modeling & Subject-Aware Evaluation',
    category: 'Computer Vision / Machine Learning',
    featured: true,
    description:
      'An ML and computer-vision system for exercise analysis, including assisted elbow flexion analysis using pose-derived kinematic features, temporal modelling, and subject-aware evaluation.',
    repoUrl: 'https://github.com/dhruvsharma06-web/Haemophilia',
    technologies: ['Python', 'PyTorch', 'LSTM', 'OpenCV', 'MediaPipe', 'NumPy', 'Scikit-learn'],
    highlightMetric: {
      label: 'LOSO Validation Result',
      value: '78.97% overall / 77.42% balanced accuracy across 195 clean repetitions',
    },
    keyPoints: [
      'Extracted spatial joint angles, angular velocities, and kinematic trajectories across sequential video frames.',
      'Implemented temporal modeling using LSTM networks to capture exercise phase transitions and form deviation.',
      'Conducted a strict Leave-One-Subject-Out (LOSO) feature-selection experiment on 195 clean human-verified repetitions to prevent inter-subject data leakage.',
      'Achieved ~78.97% overall accuracy and 77.42% balanced accuracy with the full 34-feature model under rigorous zero-leakage cross-validation.',
    ],
  },
  {
    id: 'stockbill',
    title: 'StockBill',
    tagline: 'Full-Stack FMCG Inventory Management & Billing Engine',
    category: 'Full-Stack / Systems',
    featured: true,
    description:
      'Inventory and billing software engineered for an FMCG distributor, featuring transactional stock tracking, tax-compliant invoice generation, and audit trails. Architected for self-hosted deployment.',
    repoUrl: 'https://github.com/deveshshuklaaa/StockBill',
    technologies: ['Django', 'Django REST Framework', 'React', 'Vite', 'PostgreSQL', 'Docker'],
    highlightMetric: {
      label: 'Architecture',
      value: 'Normalized PostgreSQL schema + DRF REST APIs + Dockerized stack',
    },
    keyPoints: [
      'Designed normalized relational schemas in PostgreSQL ensuring transactional consistency for inventory depletion and credit accounting.',
      'Built a performant Django REST Framework backend with role-based access control, token authentication, and strict request validation.',
      'Created an intuitive, keyboard-friendly React frontend powered by Vite for rapid billing entry and stock level audits.',
      'Configured multi-container Docker deployment with isolated networks and environment-driven configurations for on-premise installation.',
    ],
  },
  {
    id: 'pura-air',
    title: 'PURA AIR',
    tagline: 'IoT Air Quality Telemetry, Real-Time AQI & Predictive Alerts',
    category: 'IoT / Embedded Systems',
    featured: true,
    description:
      'An IoT air-quality monitoring system using ESP32 microcontrollers and environmental sensors, featuring localized AQI computation, data visualisation, telemetry alerts, and short-term trend prediction.',
    repoUrl: null, // Private / local project
    technologies: ['ESP32', 'IoT', 'Firebase', 'Python', 'MQTT', 'C++'],
    highlightMetric: {
      label: 'Telemetry Engine',
      value: 'Sub-second sensor acquisition, MQTT streaming & cloud sync',
    },
    keyPoints: [
      'Programmed ESP32 firmware for continuous multi-sensor telemetry (particulate matter PM2.5/PM10, CO₂, temperature, humidity).',
      'Implemented edge computation of localized AQI sub-indices and low-overhead MQTT packet transmission to Firebase realtime backend.',
      'Developed automated threshold monitoring to trigger instant push alerts during acute particulate spikes.',
      'Built Python visualization and regression analysis modules for historical trend analysis and short-term air quality forecasting.',
    ],
  },
  {
    id: 'smart-spray',
    title: 'SmartSpray',
    tagline: 'AI-Assisted Agricultural Vision & Actuation Prototype',
    category: 'Computer Vision / Edge AI',
    featured: true,
    description:
      'An AI-assisted agricultural spraying prototype combining computer vision object detection, FastAPI backend services, and ESP32-based pump actuation with AUTO, ASSISTED, and MANUAL operating modes.',
    repoUrl: 'https://github.com/dhruvsharma06-web/smart_spray_ai',
    technologies: ['YOLO', 'PyTorch', 'OpenCV', 'FastAPI', 'Flutter', 'ESP32'],
    highlightMetric: {
      label: 'Control Architecture',
      value: 'Tri-modal operation (AUTO / ASSISTED / MANUAL) with safety overrides',
    },
    keyPoints: [
      'Trained and deployed YOLO detection pipelines to identify weed targets and crop boundaries from live camera feeds.',
      'Built an asynchronous FastAPI service to coordinate real-time CV bounding box telemetry with hardware pump triggers.',
      'Engineered ESP32 microcontroller logic supporting tri-modal spraying (autonomous targeting, operator-assisted confirmation, manual override).',
      'Integrated mobile operator interface in Flutter for real-time status visualization, mode switching, and hardware telemetry.',
    ],
  },
  {
    id: 'cyberlabx',
    title: 'CyberLabX',
    tagline: 'Virtual Cybersecurity Sandbox & On-Demand Lab Provisioning',
    category: 'Distributed Systems / Security',
    featured: true,
    description:
      'A virtual cybersecurity laboratory using a MERN-based web platform and Docker-based lab provisioning for on-demand, isolated challenge environments.',
    repoUrl: null,
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Docker', 'dockerode'],
    highlightMetric: {
      label: 'Isolation Model',
      value: 'Dynamic ephemeral container lifecycle management via dockerode',
    },
    keyPoints: [
      'Developed a full MERN-stack application managing security exercises, user progress, and flag submission validation.',
      'Leveraged dockerode to dynamically spin up, network-isolate, and cleanly terminate ephemeral challenge environments per user session.',
      'Enforced strict resource quotas (CPU, memory, storage limits) to prevent system starvation and eliminate lateral escape risks.',
      'Integrated browser-based terminal access for direct interaction with containerized challenge targets.',
    ],
  },
]
