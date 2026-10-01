export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      education: 'Education',
      projects: 'Projects',
      hobbies: 'Hobbies'
    },
    header: {
      brandName: 'LAURA_MORENO.DATA',
      brandTag: 'QUALITY TO DATA'
    },
    footer: {
      brandName: 'LAURA_MORENO.DATA',
      tagline: 'Built and maintained by Laura Moreno. Bridging food safety expertise with data-driven quality assurance.',
      rights: 'ALL RIGHTS RESERVED.'
    },
    home: {
      badge: 'PROFESSIONAL PROFILE',
      titleLine1: 'Data Analyst & QA',
      titleLine2: 'Food Safety Foundation',
      summary: 'Quality professional with 4+ years auditing and leading regulated management systems (BRCGS, HACCP, INVIMA, ICONTEC) in the food and beverage industry, now transitioning into Data Analytics and QA. I build data dashboards in React, Vercel, and Supabase to visualize quality indicators, and apply statistical process control and Python for analysis — combining audit rigor and traceability with new technical skills for Data Analyst, QA, or Data/Software Engineering Junior roles.',
      specialtyLabel: 'Specialty',
      specialtyValue: 'Data Analytics, React/Supabase & Food Safety Systems',
      locationLabel: 'Location',
      locationValue: 'Barranquilla / Atlántico',
      btnViewExperience: 'View Experience',
      btnDownloadResume: 'Download Resume',
      btnLinkedin: 'LinkedIn'
    },
    about: {
      heading: 'About',
      headingHighlight: 'Me',
      paragraph1: 'Professional specialized in leading food safety, quality, and compliance processes in the food and beverage industry, now transitioning into Data Analytics and QA. I have experience managing audits, continuous improvement, and operational excellence, focusing my efforts on ensuring safe, efficient, and reliable plant operations.',
      paragraph2: "My approach combines strong technical knowledge, multidisciplinary team leadership, and strategic quality system management, enabling high performance standards, regulatory compliance, and customer satisfaction. Alongside that foundation, I'm building data dashboards with React, Vercel, and Supabase, and applying Python and statistical process control to turn quality data into decisions — committed to a culture of continuous improvement and to implementing solutions that create sustainable value for the organization.",
      chips: [
        'BRCGS Food Safety',
        'Advanced HACCP',
        'Internal Auditing',
        'Continuous Improvement',
        'Python',
        'React',
        'Git / GitHub',
        'Vercel',
        'Supabase',
        'Advanced Excel',
        'Statistical Process Control'
      ],
      stats: {
        internalAudits: { label: 'Internal Audits', desc: 'BRCGS Food Safety Issue 9' },
        externalAudits: { label: 'External Audits', desc: 'Successfully completed (INVIMA and ICONTEC)' },
        vpoAudits: { label: 'Management System Audits (VPO)', desc: 'Management system audits based on VPO' }
      }
    },
    work: {
      headingLine1: 'Professional',
      headingHighlight: 'Trajectory',
      subtitle: 'Experience in food safety, quality, and food safety assurance in the food and beverage industry, leading audits, management systems, and continuous improvement initiatives.',
      categoryFoodSafety: 'FOOD SAFETY',
      leadTitle: 'Food Safety Leader and Sensory Coordinator',
      leadCompany: 'Bavaria / AB InBev - Atlántico Brewery',
      leadDate: 'Nov 2024 — Jun 2026',
      fullTime: 'FULL-TIME',
      leadBullets: [
        'Led the Food Safety Management System at the alcoholic beverage production plant.',
        'Prepared and supported the INVIMA audit for alcoholic beverage production (Decree 1686 of 2012).',
        'Managed internal and external audits, closed findings, and coordinated Food Defense and Food Fraud programs.'
      ],
      leadChips: ['BRCGS', 'HACCP', 'Food Defense', 'Food Fraud', 'INVIMA'],
      statInternalAudits: 'INTERNAL AUDITS',
      statExternalAudits: 'EXTERNAL AUDITS',
      greenfieldTag: 'GREENFIELD PROJECT',
      greenfieldTitle: 'Food Safety Leader and Sensory Coordinator',
      greenfieldCompany: 'Bavaria / AB InBev - Atlántico Brewery',
      greenfieldDate: 'Mar 2024 - Nov 2024',
      greenfieldChips: ['BRCGS', 'PRPs', 'Training', 'Start-up'],
      greenfieldBullets: [
        'Led the implementation of the Food Safety Management System for the Greenfield project.',
        'Developed and implemented procedures, work instructions, and prerequisite programs.',
        'Designed food safety training and supported production process start-up activities.'
      ],
      microCategory: 'MICROBIOLOGY',
      microTitle: 'Microbiology Analyst',
      microCompany: 'Cervecería Unión., Medellín',
      microDate: 'Jan 2023 - Feb 2024',
      microBullets: [
        'Ensured the safety of raw materials, in-process, and finished product, measured by systematic microbiological analysis and the monitoring of environments, surfaces, and handlers.',
        'Detected deviations in microbiological indicators before they affected production, measured by statistical process control applied to batch data, and closed non-conformities through data-driven root cause analysis.'
      ],
      microChips: ['Industrial Microbiology', 'Quality Control', 'Corrective Actions'],
      sensoryCategory: 'SENSORY AND TRAINING',
      sensoryTitle: 'Sensory Panel Coordinator / University Intern',
      sensoryCompany: 'Cervecería Unión., Medellín',
      sensoryDate: 'Aug 2022 - Feb 2023 / Mar 2022 - Sep 2022',
      sensoryBullets: [
        'Validated the sensory quality of the beer, measured by statistical analysis of test results I designed and coordinated with the panel, raising panel reliability through ongoing training and performance follow-up.',
        'Contributed to plant quality and safety control as a university intern, through direct participation in brewing processes and sensory and microbiological analysis.'
      ],
      sensoryChips: ['Sensory Evaluation', 'Training', 'Process Control']
    },
    education: {
      headingLine1: 'Academic',
      headingHighlight: 'Education',
      subtitle: 'Academic and technical background, followed by classroom projects developed during the degree.',
      pathLabel: 'Education Path',
      pathHeading: 'Academic Journey',
      pathSubtitle: 'Timeline of academic, technical, and complementary training.',
      history: [
        { years: '2022', degree: 'Industrial Chemistry', description: 'ITM Metropolitan Technological Institute, Medellín, Antioquia.', techStackTitle: 'Institution', techStack: 'ITM Metropolitan Technological Institute' },
        { years: '2021', degree: 'Training in "Nano-Biolubricants"', description: 'Training Cycles "Young ITM Researchers and Innovators 2021".', techStackTitle: 'Institution', techStack: 'ITM Metropolitan Technical Institute' },
        { years: '2021', degree: 'Training Course in Latex Utilization, Properties, Applications, and State of the Art', description: 'ITM Metropolitan Technical Institute.', techStackTitle: 'Institution', techStack: 'ITM Metropolitan Technical Institute' },
        { years: '2015', degree: 'Diploma in Artisan Bakery and Pastry', description: 'PONAC National Polytechnic, Manizales, Caldas.', techStackTitle: 'Institution', techStack: 'PONAC National Polytechnic' },
        { years: '2015', degree: 'Vocational Technician in Gastronomic Cooking', description: 'Manizales, Caldas.', techStackTitle: 'Program', techStack: 'Gastronomic Cooking' },
        { years: '2013', degree: 'Systems Technician', description: 'SENA National Learning Service, Villamaría, Caldas.', techStackTitle: 'Institution', techStack: 'SENA' },
        { years: '2013', degree: 'Technical High School Diploma', description: 'Santa Luisa de Marillac Educational Institution, Villamaría, Caldas.', techStackTitle: 'Institution', techStack: 'Santa Luisa de Marillac' }
      ],
      certHeadingLine1: 'Recent',
      certHeadingHighlight: 'Certifications',
      certSubtitle: 'Latest certifications in English and software/data fundamentals.',
      certifications: [
        { title: 'Claude Code Course', approvedDate: 'Approved in July 2026', platform: 'Platzi', category: 'Software/Data' },
        { title: 'Basic English Course A1: Present Simple', approvedDate: 'Approved on June 19, 2026', platform: 'Platzi', category: 'English' },
        { title: 'Basic English Course A1: Verb To Be', approvedDate: 'Approved on June 18, 2026', platform: 'Platzi', category: 'English' },
        { title: 'Basic English Course A1 for Beginners', approvedDate: 'Approved on June 16, 2026', platform: 'Platzi', category: 'English' },
        { title: 'Python Fundamentals', approvedDate: 'Approved on July 15, 2026', platform: 'Platzi', category: 'Software/Data' },
        { title: 'Software Engineering Fundamentals', approvedDate: 'Approved on June 19, 2026', platform: 'Platzi', category: 'Software/Data' },
        { title: 'Data Engineering Fundamentals', approvedDate: 'Approved on June 19, 2026', platform: 'Platzi', category: 'Software/Data' }
      ],
      classroomHeadingLine1: 'Classroom',
      classroomHeadingHighlight: 'Projects',
      classroomSubtitle: 'Applied industrial chemistry projects developed during the academic stage.',
      classroomProjects: [
        { year: '2020', title: 'Biodegradable Polymer from Avocado Seed', course: 'Classroom Project', description: 'Post-harvest product utilization for the development of biodegradable materials.', icon: 'leaf' },
        { year: '2020', title: 'Cosmetic and Pharmaceutical Products', course: 'With Professor Guillermo Sánchez Sánchez', description: 'Product formulation and analysis in an academic context, focused on quality and industrial application.', icon: 'beaker' },
        { year: '2018', title: 'Natural Dye Extraction', course: 'Industrial Organic Chemistry - Professor Juliana Nanclares', description: 'Extraction and evaluation of dyes using naturally sourced materials.', icon: 'palette' },
        { year: '2017', title: 'Water Purification', course: 'Analytical Chemistry - Professor Juliana Nanclares', description: 'Development of a water purification process as a university laboratory practice.', icon: 'droplets' }
      ]
    },
    projects: {
      headingLine1: 'Professional',
      headingHighlight: 'Projects',
      subtitle: 'Selected projects combining data, software fundamentals, and quality/process management.',
      statusLive: 'Live',
      statusConfidential: 'Confidential',
      viewProject: 'View Project',
      items: [
        {
          title: 'Sudoku Infinity',
          status: 'Live',
          description: 'Implemented real-time rule validation for a complete game, measured by the fully functional Sudoku I built in React with a Supabase backend for the registered mode, streaks, and rankings.',
          stack: ['React', 'Supabase', 'Vercel']
        },
        {
          title: 'Tablero de Control SGI — Emprestur',
          status: 'Confidential',
          description: 'A real operational dashboard tracking safety, quality, and environmental indicators for a transportation company — full internal and external audit tracking, findings, closure rates, and monthly trends, all centralized in one panel built in React and deployed on Vercel.',
          lockedNote: 'Illustrative screenshot. No public access due to the confidentiality of the company’s data.',
          stack: ['React', 'Vercel', 'Data Analysis']
        },
        {
          title: 'Centro de Control SGI',
          status: 'Live',
          description: "An interactive showcase built for a transportation company's Integrated Management team (Quality, Environmental, Occupational Health & Safety, Road Safety) — a visual, engaging way to introduce the team and its processes, built in React and deployed on Vercel.",
          stack: ['React', 'Vercel']
        },
        {
          title: 'Salsamentaría Safi',
          status: 'Live',
          description: 'Streamlined point-of-sale operations for a delicatessen business, measured by the full management system I built — sales, inventory, cash & expenses, customers, and suppliers — with support for cash, card, and QR transfer payments.',
          stack: ['React', 'Supabase', 'Vercel']
        },
        {
          title: 'TextilePro',
          status: 'Live',
          description: 'Digitized piece-rate production tracking for a textile workshop, measured by the management system I built — per-worker production logging, inventory, payroll, and accounting — replacing manual paper records.',
          stack: ['React', 'Supabase', 'Vercel']
        }
      ]
    },
    hobbies: {
      headingLine1: 'Beyond',
      headingHighlight: 'Code',
      subtitle: 'Every hobby is an opportunity to learn, disconnect, and find new sources of inspiration. From the energy of movement to shared moments with the people I value most, these activities are part of my personal growth and daily balance.',
      items: [
        { title: 'Skating', subtitle: 'Balance in Motion', description: 'Speed, balance, and freedom come together in every ride on wheels.' },
        { title: 'Movies', subtitle: 'Stories on Screen', description: 'Exploring worlds, emotions, and adventures through stories that inspire and entertain.' },
        { title: 'Swimming', subtitle: 'Between Waves and Goals', description: 'An opportunity to clear my mind, push limits, and enjoy the calm of the water.' },
        { title: 'Family', subtitle: 'Moments That Matter', description: "Sharing laughter, conversations, and experiences that strengthen life's most valuable bonds." }
      ]
    },
    contact: {
      headerTag: 'SECURE_COMMUNICATION.IO',
      senderName: 'SENDER NAME *',
      namePlaceholder: 'e.g. Linus Torvalds',
      emailAddress: 'EMAIL ADDRESS *',
      emailPlaceholder: 'e.g. linus@kernel.org',
      subjectInquiry: 'SUBJECT INQUIRY',
      subjectOptions: ['General Inquiry', 'SaaS Architecture Consulting', 'Data Analytics Pipelines', 'Full-Stack Collaboration'],
      messageLabel: 'ENCRYPTED MESSAGE CONTENT *',
      messagePlaceholder: 'Compose your technical prompt or project details here...',
      submitButton: 'Submit Payload',
      transmitting: 'TRANSMITTING SECURE DATA...',
      successTitle: 'Transmission Completed',
      successBody: 'Your informational inquiries have been parsed, encrypted, and compiled. Laura will deploy responses shortly after handshake.',
      closeButton: 'CLOSE TERMINAL'
    },
    languageToggle: { label: 'EN' }
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      work: 'Experiencia',
      education: 'Educación',
      projects: 'Proyectos',
      hobbies: 'Pasatiempos'
    },
    header: {
      brandName: 'LAURA_MORENO.DATA',
      brandTag: 'CALIDAD A DATOS'
    },
    footer: {
      brandName: 'LAURA_MORENO.DATA',
      tagline: 'Construido y mantenido por Laura Moreno. Conectando la experiencia en seguridad alimentaria con el aseguramiento de calidad basado en datos.',
      rights: 'TODOS LOS DERECHOS RESERVADOS.'
    },
    home: {
      badge: 'PERFIL PROFESIONAL',
      titleLine1: 'Analista de Datos y QA',
      titleLine2: 'Con Base en Inocuidad Alimentaria',
      summary: 'Profesional de Calidad con más de 4 años auditando y liderando sistemas de gestión regulados (BRCGS, HACCP, INVIMA, ICONTEC) en la industria de alimentos y bebidas, hoy en transición hacia Analítica de Datos y QA. Construyo paneles de datos en React, Vercel y Supabase para visualizar indicadores de calidad, y aplico control estadístico de procesos y Python para el análisis — combinando rigor de auditoría y trazabilidad con nuevas competencias técnicas para roles de Data Analyst, QA o Data/Software Engineering Junior.',
      specialtyLabel: 'Especialidad',
      specialtyValue: 'Analítica de Datos, React/Supabase y Sistemas de Seguridad Alimentaria',
      locationLabel: 'Ubicación',
      locationValue: 'Barranquilla / Atlántico',
      btnViewExperience: 'Ver Experiencia',
      btnDownloadResume: 'Descargar Hoja de Vida',
      btnLinkedin: 'LinkedIn'
    },
    about: {
      heading: 'Sobre',
      headingHighlight: 'Mí',
      paragraph1: 'Profesional especializada en liderar procesos de seguridad alimentaria, calidad y cumplimiento normativo en la industria de alimentos y bebidas, hoy en transición hacia Analítica de Datos y QA. Tengo experiencia gestionando auditorías, mejora continua y excelencia operacional, enfocando mis esfuerzos en garantizar operaciones de planta seguras, eficientes y confiables.',
      paragraph2: 'Mi enfoque combina sólido conocimiento técnico, liderazgo de equipos multidisciplinarios y gestión estratégica de sistemas de calidad, habilitando altos estándares de desempeño, cumplimiento normativo y satisfacción del cliente. Junto a esa base, estoy construyendo paneles de datos con React, Vercel y Supabase, y aplicando Python y control estadístico de procesos para convertir datos de calidad en decisiones — comprometida con una cultura de mejora continua y con la implementación de soluciones que generen valor sostenible para la organización.',
      chips: [
        'BRCGS Food Safety',
        'HACCP Avanzado',
        'Auditoría Interna',
        'Mejora Continua',
        'Python',
        'React',
        'Git / GitHub',
        'Vercel',
        'Supabase',
        'Excel Avanzado',
        'Control Estadístico de Procesos'
      ],
      stats: {
        internalAudits: { label: 'Auditorías Internas', desc: 'BRCGS Food Safety Issue 9' },
        externalAudits: { label: 'Auditorías Externas', desc: 'Completadas exitosamente (INVIMA e ICONTEC)' },
        vpoAudits: { label: 'Auditorías de Sistema de Gestión (VPO)', desc: 'Auditorías de sistema de gestión basadas en VPO' }
      }
    },
    work: {
      headingLine1: 'Trayectoria',
      headingHighlight: 'Profesional',
      subtitle: 'Experiencia en seguridad alimentaria, calidad e inocuidad en la industria de alimentos y bebidas, liderando auditorías, sistemas de gestión e iniciativas de mejora continua.',
      categoryFoodSafety: 'SEGURIDAD ALIMENTARIA',
      leadTitle: 'Líder de Seguridad Alimentaria y Coordinadora Sensorial',
      leadCompany: 'Bavaria / AB InBev - Cervecería del Atlántico',
      leadDate: 'Nov 2024 — Jun 2026',
      fullTime: 'TIEMPO COMPLETO',
      leadBullets: [
        'Lideré el Sistema de Gestión de Seguridad Alimentaria en la planta de producción de bebidas alcohólicas.',
        'Preparé y acompañé la auditoría INVIMA para la elaboración de bebidas alcohólicas (Decreto 1686 de 2012).',
        'Gestioné auditorías internas y externas, cerré hallazgos y coordiné los programas Food Defense y Food Fraud.'
      ],
      leadChips: ['BRCGS', 'HACCP', 'Food Defense', 'Food Fraud', 'INVIMA'],
      statInternalAudits: 'AUDITORÍAS INTERNAS',
      statExternalAudits: 'AUDITORÍAS EXTERNAS',
      greenfieldTag: 'PROYECTO GREENFIELD',
      greenfieldTitle: 'Líder de Seguridad Alimentaria y Coordinadora Sensorial',
      greenfieldCompany: 'Bavaria / AB InBev - Cervecería del Atlántico',
      greenfieldDate: 'Mar 2024 - Nov 2024',
      greenfieldChips: ['BRCGS', 'PRPs', 'Capacitación', 'Puesta en marcha'],
      greenfieldBullets: [
        'Lideré la implementación del Sistema de Gestión de Seguridad Alimentaria para el proyecto Greenfield.',
        'Desarrollé e implementé procedimientos, instructivos y programas de prerrequisitos.',
        'Diseñé capacitaciones en inocuidad alimentaria y acompañé la puesta en marcha de los procesos productivos.'
      ],
      microCategory: 'MICROBIOLOGÍA',
      microTitle: 'Analista de Microbiología',
      microCompany: 'Cervecería Unión., Medellín',
      microDate: 'Ene 2023 - Feb 2024',
      microBullets: [
        'Garanticé la inocuidad de materias primas, producto en proceso y terminado, medido por la ejecución sistemática de análisis microbiológicos y el monitoreo de ambientes, superficies y manipuladores.',
        'Detecté desviaciones en indicadores microbiológicos antes de que afectaran la producción, medido por el control estadístico de procesos aplicado a los datos de cada lote, y cerré no conformidades mediante análisis de causa raíz basado en datos.'
      ],
      microChips: ['Microbiología Industrial', 'Control de Calidad', 'Acciones Correctivas'],
      sensoryCategory: 'SENSORIAL Y CAPACITACIÓN',
      sensoryTitle: 'Coordinadora de Panel Sensorial / Practicante Universitaria',
      sensoryCompany: 'Cervecería Unión., Medellín',
      sensoryDate: 'Ago 2022 - Feb 2023 / Mar 2022 - Sep 2022',
      sensoryBullets: [
        'Validé la calidad sensorial de la cerveza, medido por el análisis estadístico de los resultados de las pruebas que diseñé y coordiné con el panel, elevando su confiabilidad mediante capacitación y seguimiento continuo.',
        'Contribuí al control de calidad e inocuidad de la planta como practicante universitaria, mediante participación directa en procesos de elaboración y análisis sensorial y microbiológico.'
      ],
      sensoryChips: ['Evaluación Sensorial', 'Capacitación', 'Control de Procesos']
    },
    education: {
      headingLine1: 'Educación',
      headingHighlight: 'Académica',
      subtitle: 'Formación académica y técnica, seguida de los proyectos de aula desarrollados durante la carrera.',
      pathLabel: 'Trayectoria Educativa',
      pathHeading: 'Recorrido Académico',
      pathSubtitle: 'Línea de tiempo de formación académica, técnica y complementaria.',
      history: [
        { years: '2022', degree: 'Química Industrial', description: 'Instituto Tecnológico Metropolitano (ITM), Medellín, Antioquia.', techStackTitle: 'Institución', techStack: 'Instituto Tecnológico Metropolitano (ITM)' },
        { years: '2021', degree: 'Formación en "Nano-Biolubricantes"', description: 'Ciclos de Formación "Jóvenes Investigadores e Innovadores ITM 2021".', techStackTitle: 'Institución', techStack: 'Instituto Tecnológico Metropolitano (ITM)' },
        { years: '2021', degree: 'Curso de Formación en Uso, Propiedades, Aplicaciones y Estado del Arte del Látex', description: 'Instituto Tecnológico Metropolitano (ITM).', techStackTitle: 'Institución', techStack: 'Instituto Tecnológico Metropolitano (ITM)' },
        { years: '2015', degree: 'Diplomado en Panadería y Pastelería Artesanal', description: 'Politécnico Nacional PONAC, Manizales, Caldas.', techStackTitle: 'Institución', techStack: 'Politécnico Nacional PONAC' },
        { years: '2015', degree: 'Técnico Laboral en Cocina Gastronómica', description: 'Manizales, Caldas.', techStackTitle: 'Programa', techStack: 'Cocina Gastronómica' },
        { years: '2013', degree: 'Técnico en Sistemas', description: 'Servicio Nacional de Aprendizaje SENA, Villamaría, Caldas.', techStackTitle: 'Institución', techStack: 'SENA' },
        { years: '2013', degree: 'Bachiller Técnico', description: 'Institución Educativa Santa Luisa de Marillac, Villamaría, Caldas.', techStackTitle: 'Institución', techStack: 'Santa Luisa de Marillac' }
      ],
      certHeadingLine1: 'Certificaciones',
      certHeadingHighlight: 'Recientes',
      certSubtitle: 'Últimas certificaciones en inglés y fundamentos de software/datos.',
      certifications: [
        { title: 'Curso de Claude Code', approvedDate: 'Aprobado en julio de 2026', platform: 'Platzi', category: 'Software/Datos' },
        { title: 'Curso de Inglés Básico A1: Present Simple', approvedDate: 'Aprobado el 19 de junio de 2026', platform: 'Platzi', category: 'Inglés' },
        { title: 'Curso de Inglés Básico A1: Verb To Be', approvedDate: 'Aprobado el 18 de junio de 2026', platform: 'Platzi', category: 'Inglés' },
        { title: 'Curso de Inglés Básico A1 para Principiantes', approvedDate: 'Aprobado el 16 de junio de 2026', platform: 'Platzi', category: 'Inglés' },
        { title: 'Fundamentos de Python', approvedDate: 'Aprobado el 15 de julio de 2026', platform: 'Platzi', category: 'Software/Datos' },
        { title: 'Fundamentos de Ingeniería de Software', approvedDate: 'Aprobado el 19 de junio de 2026', platform: 'Platzi', category: 'Software/Datos' },
        { title: 'Fundamentos de Ingeniería de Datos', approvedDate: 'Aprobado el 19 de junio de 2026', platform: 'Platzi', category: 'Software/Datos' }
      ],
      classroomHeadingLine1: 'Proyectos',
      classroomHeadingHighlight: 'de Aula',
      classroomSubtitle: 'Proyectos aplicados de química industrial desarrollados durante la etapa académica.',
      classroomProjects: [
        { year: '2020', title: 'Polímero Biodegradable a partir de Semilla de Aguacate', course: 'Proyecto de Aula', description: 'Aprovechamiento de subproductos poscosecha para el desarrollo de materiales biodegradables.', icon: 'leaf' },
        { year: '2020', title: 'Productos Cosméticos y Farmacéuticos', course: 'Con el profesor Guillermo Sánchez Sánchez', description: 'Formulación y análisis de productos en contexto académico, enfocado en calidad y aplicación industrial.', icon: 'beaker' },
        { year: '2018', title: 'Extracción de Tintes Naturales', course: 'Química Orgánica Industrial - Profesora Juliana Nanclares', description: 'Extracción y evaluación de tintes utilizando materiales de origen natural.', icon: 'palette' },
        { year: '2017', title: 'Purificación de Agua', course: 'Química Analítica - Profesora Juliana Nanclares', description: 'Desarrollo de un proceso de purificación de agua como práctica de laboratorio universitaria.', icon: 'droplets' }
      ]
    },
    projects: {
      headingLine1: 'Proyectos',
      headingHighlight: 'Profesionales',
      subtitle: 'Proyectos seleccionados que combinan datos, fundamentos de software y gestión de calidad/procesos.',
      statusLive: 'En vivo',
      statusConfidential: 'Confidencial',
      viewProject: 'Ver Proyecto',
      items: [
        {
          title: 'Sudoku Infinity',
          status: 'En vivo',
          description: 'Implementé validación de reglas en tiempo real para un juego completo, medido por el Sudoku funcional que construí en React con backend en Supabase para el modo con registro, rachas y rankings.',
          stack: ['React', 'Supabase', 'Vercel']
        },
        {
          title: 'Tablero de Control SGI — Emprestur',
          status: 'Confidencial',
          description: 'Tablero operativo con indicadores reales de seguridad, calidad y gestión ambiental para una empresa de transporte: seguimiento completo de auditorías internas y externas, hallazgos, % de cierre y tendencias mensuales — todo centralizado en un solo panel construido en React y desplegado en Vercel.',
          lockedNote: 'Captura ilustrativa. Sin acceso público por confidencialidad de los datos de la empresa.',
          stack: ['React', 'Vercel', 'Análisis de Datos']
        },
        {
          title: 'Centro de Control SGI',
          status: 'En vivo',
          description: 'Presentación interactiva para el equipo de Gestión Integral (Calidad, Ambiental, SST, Seguridad Vial) de una empresa de transporte: un showcase visual y dinámico construido en React y desplegado en Vercel para dar a conocer al equipo y sus procesos de forma atractiva.',
          stack: ['React', 'Vercel']
        },
        {
          title: 'Salsamentaría Safi',
          status: 'En vivo',
          description: 'Optimicé la operación de punto de venta de una salsamentaría, medido por el sistema de gestión completo que construí — ventas, inventario, caja y gastos, clientes y proveedores — con soporte para pagos en efectivo, tarjeta y transferencia QR.',
          stack: ['React', 'Supabase', 'Vercel']
        },
        {
          title: 'TextilePro',
          status: 'En vivo',
          description: 'Digitalicé el registro de producción a destajo de un taller textil, medido por el sistema de gestión que construí — registro de producción por operario, inventario, nómina y contabilidad — reemplazando el registro manual en papel.',
          stack: ['React', 'Supabase', 'Vercel']
        }
      ]
    },
    hobbies: {
      headingLine1: 'Más Allá',
      headingHighlight: 'del Código',
      subtitle: 'Cada pasatiempo es una oportunidad para aprender, desconectar y encontrar nuevas fuentes de inspiración. Desde la energía del movimiento hasta los momentos compartidos con las personas que más valoro, estas actividades son parte de mi crecimiento personal y equilibrio diario.',
      items: [
        { title: 'Patinaje', subtitle: 'Equilibrio en Movimiento', description: 'Velocidad, equilibrio y libertad se combinan en cada recorrido sobre ruedas.' },
        { title: 'Películas', subtitle: 'Historias en Pantalla', description: 'Explorando mundos, emociones y aventuras a través de historias que inspiran y entretienen.' },
        { title: 'Natación', subtitle: 'Entre Olas y Metas', description: 'Una oportunidad para despejar la mente, superar límites y disfrutar la calma del agua.' },
        { title: 'Familia', subtitle: 'Momentos que Importan', description: 'Compartir risas, conversaciones y experiencias que fortalecen los vínculos más valiosos de la vida.' }
      ]
    },
    contact: {
      headerTag: 'SECURE_COMMUNICATION.IO',
      senderName: 'NOMBRE *',
      namePlaceholder: 'ej. Linus Torvalds',
      emailAddress: 'CORREO ELECTRÓNICO *',
      emailPlaceholder: 'ej. linus@kernel.org',
      subjectInquiry: 'ASUNTO',
      subjectOptions: ['Consulta General', 'Consultoría de Arquitectura SaaS', 'Pipelines de Analítica de Datos', 'Colaboración Full-Stack'],
      messageLabel: 'MENSAJE *',
      messagePlaceholder: 'Escribe aquí tu mensaje o los detalles del proyecto...',
      submitButton: 'Enviar Mensaje',
      transmitting: 'ENVIANDO DATOS DE FORMA SEGURA...',
      successTitle: 'Mensaje Enviado',
      successBody: 'Tu mensaje fue recibido y encriptado correctamente. Laura te responderá a la brevedad.',
      closeButton: 'CERRAR'
    },
    languageToggle: { label: 'ES' }
  }
} as const;
