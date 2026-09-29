export const projects = [
  {
    id: 'haemophilia-exercise-analysis',
    title: 'Haemophilia Exercise Analysis',
    tagline: 'Kinematic Feature Modeling & Subject-Aware Evaluation for Physical Therapy',
    category: 'Computer Vision & ML',
    filterTag: 'cv-ml',
    featured: true,
    repoUrl: 'https://github.com/dhruvsharma06-web/Haemophilia',
    status: 'Research Prototype / Active Evaluation',
    problem:
      'Patients with haemophilia requiring guided physical therapy need objective tracking of joint flexion (specifically assisted elbow flexion). Visual assessments by clinicians are qualitative, while wearable goniometers can be intrusive or unavailable.',
    whatBuilt:
      'An end-to-end computer-vision pipeline that extracts 2D/3D pose landmarks from monocular video, computes 34 biomechanical kinematic features (joint angles, angular velocities, trajectories), and models temporal repetition dynamics using PyTorch LSTM networks.',
    keyDecisions: [
      {
        decision: 'Temporal LSTM vs Static Classifiers',
        rationale:
          'Exercise quality depends on velocity smooth transitions and range-of-motion over time rather than isolated frames. Recurrent sequence modeling captures repetition cadence and fatigue indicators.',
      },
      {
        decision: 'Strict Leave-One-Subject-Out (LOSO) Validation',
        rationale:
          'Standard random k-fold cross-validation causes massive data leakage when frames or repetitions from the same subject exist across train and test sets. LOSO tests strictly on unseen participants.',
      },
      {
        decision: 'Human-Verified Dataset Curation',
        rationale:
          'Evaluated on 195 clean, manually verified repetitions across multiple participants to ensure ground-truth kinematic consistency.',
      },
    ],
    metric: {
      label: 'Strict LOSO Benchmark',
      value: '~78.97% overall accuracy / 77.42% balanced accuracy (full 34-feature model across 195 verified repetitions).',
      qualification: 'Empirical cross-validation result on study cohort; not a medical diagnostic claim.',
    },
    technologies: ['Python', 'PyTorch', 'LSTM', 'OpenCV', 'MediaPipe', 'NumPy', 'Scikit-learn'],
  },
  {
    id: 'stockbill',
    title: 'StockBill',
    tagline: 'High-Integrity Inventory Management & Billing Engine for FMCG Distributors',
    category: 'Full-Stack & Systems',
    filterTag: 'fullstack',
    featured: true,
    repoUrl: 'https://github.com/deveshshuklaaa/StockBill',
    status: 'Functional Software / Pre-Deployment',
    problem:
      'Fast-Moving Consumer Goods (FMCG) distributors handle high-velocity stock turnover across multi-tier product hierarchies, requiring rigid audit trails, credit ledger reconciliations, and tax-compliant invoice generation without inventory inconsistencies.',
    whatBuilt:
      'A full-stack enterprise billing platform with a Django REST Framework backend, normalized PostgreSQL database, snappy React/Vite dashboard, and containerized Docker setup prepared for self-hosted distribution warehouses.',
    keyDecisions: [
      {
        decision: 'PostgreSQL Relational Schema with DB-Level Transactions',
        rationale:
          'Stock depletion and credit ledger mutations must be atomic. ACID guarantees prevent phantom stock or ledger drift during concurrent billing sessions.',
      },
      {
        decision: 'Modular DRF Architecture & Token Auth',
        rationale:
          'Divided business logic into decoupled apps (accounts, billing, customers) with explicit serialisers, role-based permissions, and strict input validation.',
      },
      {
        decision: 'Docker & Docker Compose Packaging',
        rationale:
          'Encapsulates backend, frontend, and PostgreSQL services into deterministic containers with isolated bridge networking and volume persistence for on-premise deployments.',
      },
    ],
    metric: {
      label: 'Architecture & Scalability',
      value: 'Normalized relational schema with atomic inventory transactions, role-based DRF APIs, and zero-dependency Docker orchestration.',
      qualification: 'Tested against multi-item billing workflows and audit logging.',
    },
    technologies: ['Django', 'Django REST Framework', 'React', 'Vite', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'smart-spray',
    title: 'SmartSpray',
    tagline: 'AI-Assisted Agricultural Vision & Actuation Prototype',
    category: 'Computer Vision & Edge AI',
    filterTag: 'cv-ml',
    featured: true,
    repoUrl: 'https://github.com/dhruvsharma06-web/smart_spray_ai',
    status: 'Hardware & Software Prototype',
    problem:
      'Conventional agricultural chemical spraying is non-selective, causing excessive pesticide usage, higher input costs, and environmental contamination. Targeted spraying requires low-latency visual target recognition and synchronized actuator control.',
    whatBuilt:
      'An integrated AI spraying prototype combining real-time YOLO object detection for weed and crop localization, an asynchronous FastAPI service for actuation coordination, and ESP32 microcontroller firmware governing PWM pump control.',
    keyDecisions: [
      {
        decision: 'Tri-Modal Operational Architecture',
        rationale:
          'Engineered AUTO (autonomous vision-triggered spraying), ASSISTED (bounding-box confirmation with operator approval), and MANUAL (direct physical override) modes for critical field safety.',
      },
      {
        decision: 'Asynchronous FastAPI Command Bridge',
        rationale:
          'Decoupled inference processing from serial microcontroller communication, preventing camera stream frame drops when pump trigger packets are sent.',
      },
      {
        decision: 'Edge Hardware Safety Cutoffs',
        rationale:
          'Embedded firmware enforces hardware timeout limits on pump duty cycles to avoid localized chemical overdose if communications stall.',
      },
    ],
    metric: {
      label: 'System Response',
      value: 'Sub-second vision-to-actuation pipeline with tri-modal control logic (AUTO, ASSISTED, MANUAL) and hardware safety cutoffs.',
      qualification: 'Benchmarked on prototype hardware rig with live camera feeds.',
    },
    technologies: ['YOLO', 'PyTorch', 'OpenCV', 'FastAPI', 'Flutter', 'ESP32', 'Python'],
  },
  {
    id: 'pura-air',
    title: 'PURA AIR',
    tagline: 'Edge-to-Cloud IoT Air Quality Telemetry & AQI Forecasting',
    category: 'IoT & Embedded Systems',
    filterTag: 'iot',
    featured: true,
    repoUrl: null,
    status: 'Functional Hardware Rig / Academic Project',
    problem:
      'Urban and indoor air quality fluctuates rapidly, but commercial monitors often lack localized sub-index computation, low-latency telemetry streaming, and automated predictive alerts for acute pollution spikes.',
    whatBuilt:
      'An IoT environmental sensing platform powered by ESP32 microcontrollers, acquiring multi-sensor data (particulate matter PM2.5/PM10, CO₂, temperature, humidity), streaming telemetry over MQTT to Firebase, and visualizing trends in real time.',
    keyDecisions: [
      {
        decision: 'Edge AQI Sub-Index Calculation',
        rationale:
          'Calculated standard air quality sub-indices directly within ESP32 C++ firmware so the hardware can issue immediate local acoustic/LED alerts even if cloud connectivity drops.',
      },
      {
        decision: 'Lightweight MQTT Protocol vs HTTP Polling',
        rationale:
          'Minimised packet headers and power consumption on the microcontroller by using pub/sub MQTT telemetry instead of heavy HTTP REST calls.',
      },
      {
        decision: 'Python Time-Series Analytics & Forecasting',
        rationale:
          'Ingested telemetry in Python to compute rolling averages and short-term trend regression, predicting particulate accumulation trends.',
      },
    ],
    metric: {
      label: 'Telemetry Performance',
      value: 'Continuous sub-second sensor acquisition, MQTT telemetry broadcast, and real-time cloud sync with automated threshold triggers.',
      qualification: 'Deployed on prototype ESP32 test rig with physical sensor array.',
    },
    technologies: ['ESP32', 'C++', 'IoT', 'MQTT', 'Firebase', 'Python'],
  },
  {
    id: 'cyberlabx',
    title: 'CyberLabX',
    tagline: 'Virtual Cybersecurity Sandbox with Dynamic Container Lifecycle Provisioning',
    category: 'Distributed Systems & Security',
    filterTag: 'fullstack',
    featured: true,
    repoUrl: null,
    status: 'Full-Stack Platform / Academic Project',
    problem:
      'Hands-on security training requires each student to have an isolated, non-interfering environment to practice exploits and defense mechanisms without risking the host server or affecting other learners.',
    whatBuilt:
      'A MERN-stack virtual cybersecurity laboratory that uses dockerode to dynamically spin up, network-isolate, and cleanly terminate ephemeral challenge containers on demand, complete with web terminal access and flag submission tracking.',
    keyDecisions: [
      {
        decision: 'Programmatic Container Management via dockerode',
        rationale:
          'Managed container lifecycle (creation, resource constraints, network binding, destruction) through native Docker daemon socket APIs rather than brittle shell execution.',
      },
      {
        decision: 'Hardened Network & Resource Quotas',
        rationale:
          'Assigned isolated Docker bridge networks per student session with strict CPU and RAM limits to eliminate lateral network probing and prevent denial-of-service.',
      },
      {
        decision: 'Automated Session Garbage Collection',
        rationale:
          'Implemented background timers to reap abandoned challenge containers, preventing host resource leaks.',
      },
    ],
    metric: {
      label: 'Container Isolation',
      value: 'Dynamic ephemeral container lifecycle (launch, network isolate, resource clamp, terminate) executed per challenge session.',
      qualification: 'Built and verified on local multi-container cybersecurity lab exercises.',
    },
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Docker', 'dockerode'],
  },
]
