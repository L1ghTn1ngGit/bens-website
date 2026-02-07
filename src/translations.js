/**
 * All translations for English and Russian
 * Structure: { key: { en: '...', ru: '...' } }
 */

const translations = {
  // Navbar
  nav: {
    brand: { en: "Benjamin's Tutoring", ru: 'Репетиторство Бенджамина' },
    home: { en: 'Home', ru: 'Главная' },
    about: { en: 'About', ru: 'Обо мне' },
    skills: { en: 'Skills', ru: 'Навыки' },
    services: { en: 'Services', ru: 'Услуги' },
    contact: { en: 'Contact', ru: 'Контакты' },
    getStarted: { en: 'Get Started', ru: 'Начать' },
  },

  // Hero
  hero: {
    eyebrow: { en: '4+ Years Experience', ru: '4+ года опыта' },
    titleLine1: { en: 'Learn with', ru: 'Учись с' },
    titleLine2: { en: 'Benjamin', ru: 'Бенджамином' },
    description: {
      en: 'Academic tutoring in Math, ELA, Science, History, and test prep. Plus music lessons in Clarinet & Bass Clarinet for all ages.',
      ru: 'Академическое репетиторство по математике, английскому, естественным наукам, истории и подготовке к экзаменам. А также уроки кларнета и бас-кларнета для всех возрастов.',
    },
    startLearning: { en: 'Start Learning', ru: 'Начать обучение' },
    viewServices: { en: 'View Services', ru: 'Смотреть услуги' },
    location: { en: 'Staten Island & Brooklyn', ru: 'Стейтен-Айленд и Бруклин' },
    grades: { en: 'Pre-K to High School', ru: 'Дошкольный — Старшая школа' },
    honor: { en: 'Honor Roll', ru: 'Отличник' },
    subjects: { en: '5+ Subjects', ru: '5+ предметов' },
    school: { en: 'Tottenville High School', ru: 'Tottenville High School' },
    carouselLabels: {
      benjaminDron: { en: 'Benjamin Dron', ru: 'Бенджамин Дрон' },
      unYouthDelegate: { en: 'UN Youth Delegate', ru: 'Делегат молодёжи ООН' },
      aviation: { en: 'Aviation', ru: 'Авиация' },
      un: { en: 'UN', ru: 'ООН' },
      band: { en: 'Band', ru: 'Оркестр' },
    },
  },

  // About
  about: {
    eyebrow: { en: 'Get to Know Me', ru: 'Познакомьтесь со мной' },
    title: { en: 'About Me', ru: 'Обо мне' },
    name: { en: "Hi, I'm Benjamin Dron", ru: 'Привет, я Бенджамин Дрон' },
    bio: {
      en: "I'm an honor roll junior at Tottenville High School in Staten Island and a passionate tutor with 4+ years of experience helping students from Pre-K through High School.",
      ru: 'Я — ученик с отличной успеваемостью (Honor Roll) в Tottenville High School на Стейтен-Айленде и репетитор с более чем 4-летним опытом работы с учениками от дошкольного до старшего школьного возраста.',
    },
    academicTutoring: { en: 'Academic Tutoring:', ru: 'Репетиторство:' },
    academicDesc: {
      en: 'Math, ELA, Science, History (including SHSAT/Regents prep)',
      ru: 'Математика, английский (ELA), естественные науки, история (включая подготовку к SHSAT/Regents)',
    },
    musicLessons: { en: 'Music Lessons:', ru: 'Музыкальные уроки:' },
    musicDesc: {
      en: 'Clarinet and Bass Clarinet (beginner & intermediate)',
      ru: 'Кларнет и бас-кларнет (начальный и средний уровень)',
    },
    yearsTutoring: { en: 'Years Tutoring', ru: 'Лет опыта' },
    viewLinkedIn: { en: 'View LinkedIn Profile', ru: 'Профиль LinkedIn' },
    highlights: {
      honorRoll: { en: 'Honor Roll Student', ru: 'Отличник' },
      honorDesc: { en: 'Junior at Tottenville High School', ru: 'Ученик Tottenville High School' },
      experience: { en: '4+ Years Experience', ru: '4+ года опыта' },
      expDesc: { en: 'Pre-K through High School', ru: 'Дошкольный — Старшая школа' },
      music: { en: 'Music Instructor', ru: 'Учитель музыки' },
      musicDesc: { en: 'Clarinet & Bass Clarinet', ru: 'Кларнет и бас-кларнет' },
    },
  },

  // Skills
  skills: {
    eyebrow: { en: 'Expertise', ru: 'Экспертиза' },
    title: { en: 'Skills & Subjects', ru: 'Навыки и предметы' },
    subtitle: {
      en: "Comprehensive tutoring across multiple subjects, tailored to each student's needs",
      ru: 'Комплексное репетиторство по нескольким предметам, адаптированное к потребностям каждого ученика',
    },
    items: [
      {
        en: { title: 'Mathematics', description: 'From basic arithmetic to algebra, geometry, and pre-calculus. Building strong foundations for academic success.' },
        ru: { title: 'Математика', description: 'От базовой арифметики до алгебры, геометрии и предварительного исчисления. Формирование прочной основы для академического успеха.' },
      },
      {
        en: { title: 'English & ELA', description: 'Reading comprehension, writing skills, grammar, and vocabulary development for all grade levels.' },
        ru: { title: 'Английский язык', description: 'Понимание прочитанного, навыки письма, грамматика и развитие словарного запаса для всех классов.' },
      },
      {
        en: { title: 'Science', description: 'General science, biology, chemistry fundamentals. Making complex concepts easy to understand.' },
        ru: { title: 'Естественные науки', description: 'Общие науки, биология, основы химии. Делаем сложные концепции понятными.' },
      },
      {
        en: { title: 'History & Social Studies', description: 'US History, World History, and Social Studies. Engaging lessons that bring history to life.' },
        ru: { title: 'История', description: 'История США, всемирная история и обществознание. Увлекательные уроки, оживляющие историю.' },
      },
      {
        en: { title: 'Test Preparation', description: 'SHSAT prep, Regents exams, and standardized test strategies to boost your scores.' },
        ru: { title: 'Подготовка к экзаменам', description: 'Подготовка к SHSAT, экзаменам Regents и стратегии стандартизированных тестов для повышения баллов.' },
      },
      {
        en: { title: 'Music Lessons', description: 'Clarinet and Bass Clarinet instruction for beginner and intermediate students.' },
        ru: { title: 'Музыкальные уроки', description: 'Обучение игре на кларнете и бас-кларнете для начинающих и учеников среднего уровня.' },
      },
    ],
  },

  // Services
  services: {
    eyebrow: { en: 'What I Offer', ru: 'Что я предлагаю' },
    title: { en: 'My Services', ru: 'Мои услуги' },
    subtitle: {
      en: 'Comprehensive tutoring services tailored to help students succeed',
      ru: 'Комплексные услуги репетиторства для успеха учеников',
    },
    items: [
      {
        en: { title: 'Math Tutoring', description: 'From basic arithmetic to algebra and geometry. Building strong foundations for success.', subjects: ['Arithmetic', 'Pre-Algebra', 'Algebra', 'Geometry'] },
        ru: { title: 'Математика', description: 'От базовой арифметики до алгебры и геометрии. Формирование прочной основы для успеха.', subjects: ['Арифметика', 'Пре-алгебра', 'Алгебра', 'Геометрия'] },
      },
      {
        en: { title: 'ELA / English', description: 'Reading comprehension, writing skills, grammar, and vocabulary for all grade levels.', subjects: ['Reading', 'Writing', 'Grammar', 'Vocabulary'] },
        ru: { title: 'Английский язык', description: 'Понимание прочитанного, навыки письма, грамматика и словарный запас для всех классов.', subjects: ['Чтение', 'Письмо', 'Грамматика', 'Словарный запас'] },
      },
      {
        en: { title: 'Science', description: 'Making science concepts clear and engaging with hands-on learning approaches.', subjects: ['Life Science', 'Physical Science', 'Earth Science'] },
        ru: { title: 'Естественные науки', description: 'Понятное и увлекательное изложение научных концепций с практическим подходом.', subjects: ['Биология', 'Физика', 'Науки о Земле'] },
      },
      {
        en: { title: 'History & Social Studies', description: 'Understanding historical events and social concepts through engaging lessons.', subjects: ['US History', 'World History', 'Geography'] },
        ru: { title: 'История', description: 'Понимание исторических событий и социальных концепций через увлекательные уроки.', subjects: ['История США', 'Всемирная история', 'География'] },
      },
      {
        en: { title: 'Test Preparation', description: 'Comprehensive prep for standardized tests with proven strategies.', subjects: ['SHSAT Prep', 'Regents Prep', 'Exams'] },
        ru: { title: 'Подготовка к экзаменам', description: 'Комплексная подготовка к стандартизированным тестам с проверенными стратегиями.', subjects: ['SHSAT', 'Regents', 'Экзамены'] },
      },
      {
        en: { title: 'Music Lessons', description: 'Learn clarinet or bass clarinet with patient, step-by-step instruction.', subjects: ['Clarinet', 'Bass Clarinet', 'Music Theory'] },
        ru: { title: 'Музыкальные уроки', description: 'Научитесь играть на кларнете или бас-кларнете с терпеливым пошаговым обучением.', subjects: ['Кларнет', 'Бас-кларнет', 'Теория музыки'] },
      },
    ],
    allLevels: { en: 'Students of All Levels Welcome', ru: 'Приглашаем учеников всех уровней' },
    levels: {
      en: ['Pre-K', 'Elementary', 'Middle School', 'High School'],
      ru: ['Дошкольный', 'Начальная школа', 'Средняя школа', 'Старшая школа'],
    },
    bookSession: { en: 'Book a Session', ru: 'Записаться на занятие' },
  },

  // Contact
  contact: {
    eyebrow: { en: "Let's Connect", ru: 'Свяжитесь с нами' },
    title: { en: 'Get In Touch', ru: 'Связаться' },
    subtitle: {
      en: 'Ready to start your learning journey? Reach out today!',
      ru: 'Готовы начать обучение? Свяжитесь сегодня!',
    },
    email: { en: 'Email', ru: 'Эл. почта' },
    phone: { en: 'Phone', ru: 'Телефон' },
    locations: { en: 'Locations', ru: 'Локации' },
    locationsContent: { en: 'Staten Island, Brooklyn, Remote', ru: 'Стейтен-Айленд, Бруклин, удалённо' },
    availability: { en: 'Availability', ru: 'Доступность' },
    availabilityContent: { en: 'Flexible scheduling', ru: 'Гибкое расписание' },
    readyTitle: { en: 'Ready to Get Started?', ru: 'Готовы начать?' },
    readyDesc: {
      en: "Fill out our registration form to book tutoring sessions. After submission, I'll contact you by text or email to confirm scheduling.",
      ru: 'Заполните форму регистрации для записи на занятия. После отправки я свяжусь с вами по электронной почте или SMS для подтверждения расписания.',
    },
    bilingualNote: {
      en: 'Russian language support available',
      ru: 'Доступна поддержка на английском языке',
    },
    registerNow: { en: 'Register Now', ru: 'Записаться' },
    pricing: {
      en: 'Pricing is flexible and based on your situation.',
      ru: 'Цены гибкие и зависят от вашей ситуации.',
    },
  },

  // Footer
  footer: {
    brand: { en: "Benjamin's Tutoring", ru: 'Репетиторство Бенджамина' },
    description: {
      en: 'Professional academic tutoring and music lessons for students of all ages.',
      ru: 'Профессиональное академическое репетиторство и уроки музыки для учеников всех возрастов.',
    },
    quickLinks: { en: 'Quick Links', ru: 'Быстрые ссылки' },
    contactInfo: { en: 'Contact Info', ru: 'Контактная информация' },
    home: { en: 'Home', ru: 'Главная' },
    aboutMe: { en: 'About Me', ru: 'Обо мне' },
    skillsLink: { en: 'Skills', ru: 'Навыки' },
    servicesLink: { en: 'Services', ru: 'Услуги' },
    contactLink: { en: 'Contact', ru: 'Контакты' },
    location: { en: 'Staten Island & Brooklyn, NY', ru: 'Стейтен-Айленд и Бруклин, Нью-Йорк' },
    remote: { en: 'Remote Available', ru: 'Удалённо' },
    copyright: {
      en: "Benjamin's Tutoring Services. All rights reserved.",
      ru: 'Репетиторские услуги Бенджамина. Все права защищены.',
    },
  },
}

export default translations
