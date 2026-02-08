/**
 * All translations for English, Russian, and Ukrainian
 * Structure: { key: { en: '...', ru: '...', uk: '...' } }
 */

const translations = {
  // Navbar
  nav: {
    brand: { en: "Dron's Tutoring", ru: 'Репетиторство Дрона', uk: 'Репетиторство Дрона' },
    home: { en: 'Home', ru: 'Главная', uk: 'Головна' },
    about: { en: 'About', ru: 'Обо мне', uk: 'Про мене' },
    skills: { en: 'Skills', ru: 'Навыки', uk: 'Навички' },
    services: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
    contact: { en: 'Contact', ru: 'Контакты', uk: 'Контакти' },
    getStarted: { en: 'Get Started', ru: 'Начать', uk: 'Почати' },
  },

  // Hero
  hero: {
    eyebrow: { en: '4+ Years Experience', ru: '4+ года опыта', uk: '4+ роки досвіду' },
    titleLine1: { en: 'Learn with', ru: 'Учись с', uk: 'Навчайся з' },
    titleLine2: { en: 'Benjamin', ru: 'Бенджамином', uk: 'Бенджаміном' },
    description: {
      en: 'Academic tutoring in Math, ELA, Science, History, and test prep. Plus music lessons in Clarinet & Bass Clarinet for all ages.',
      ru: 'Академическое репетиторство по математике, английскому, естественным наукам, истории и подготовке к экзаменам. А также уроки кларнета и бас-кларнета для всех возрастов.',
      uk: 'Академічне репетиторство з математики, англійської, природничих наук, історії та підготовки до іспитів. А також уроки кларнета та бас-кларнета для всіх вікових груп.',
    },
    startLearning: { en: 'Start Learning', ru: 'Начать обучение', uk: 'Почати навчання' },
    viewServices: { en: 'View Services', ru: 'Смотреть услуги', uk: 'Переглянути послуги' },
    location: { en: 'Staten Island & Brooklyn', ru: 'Стейтен-Айленд и Бруклин', uk: 'Стейтен-Айленд та Бруклін' },
    grades: { en: 'Pre-K to High School', ru: 'Дошкольный — Старшая школа', uk: 'Дошкільний — Старша школа' },
    honor: { en: 'Honor Roll', ru: 'Отличник', uk: 'Відмінник' },
    subjects: { en: '5+ Subjects', ru: '5+ предметов', uk: '5+ предметів' },
    school: { en: 'Tottenville High School', ru: 'Tottenville High School', uk: 'Tottenville High School' },
    carouselLabels: {
      benjaminDron: { en: 'Benjamin Dron | UN Youth Delegate', ru: 'Бенджамин Дрон | Делегат молодёжи ООН', uk: 'Бенджамін Дрон | Делегат молоді ООН' },
      unYouthDelegate: { en: 'UN Youth Delegate', ru: 'Делегат молодёжи ООН', uk: 'Делегат молоді ООН' },
      aviation: { en: 'Aviation', ru: 'Авиация', uk: 'Авіація' },
      un: { en: 'UN', ru: 'ООН', uk: 'ООН' },
      band: { en: 'Band', ru: 'Оркестр', uk: 'Оркестр' },
    },
  },

  // About
  about: {
    eyebrow: { en: 'Get to Know Me', ru: 'Познакомьтесь со мной', uk: 'Познайомтеся зі мною' },
    title: { en: 'About Me', ru: 'Обо мне', uk: 'Про мене' },
    name: { en: "Hi, I'm Benjamin Dron", ru: 'Привет, я Бенджамин Дрон', uk: 'Привіт, я Бенджамін Дрон' },
    bio: {
      en: "I'm an honor roll junior at Tottenville High School in Staten Island and a passionate tutor with 4+ years of experience helping students from Pre-K through High School.",
      ru: 'Я — ученик с отличной успеваемостью (Honor Roll) в Tottenville High School на Стейтен-Айленде и репетитор с более чем 4-летним опытом работы с учениками от дошкольного до старшего школьного возраста.',
      uk: 'Я — учень з відмінною успішністю (Honor Roll) у Tottenville High School на Стейтен-Айленді та репетитор з понад 4-річним досвідом роботи з учнями від дошкільного до старшого шкільного віку.',
    },
    academicTutoring: { en: 'Academic Tutoring:', ru: 'Репетиторство:', uk: 'Репетиторство:' },
    academicDesc: {
      en: 'Math, ELA, Science, History (including SHSAT, Regents, and other state assessments)',
      ru: 'Математика, английский (ELA), естественные науки, история (включая SHSAT, Regents и другие государственные экзамены)',
      uk: 'Математика, англійська (ELA), природничі науки, історія (включаючи SHSAT, Regents та інші державні іспити)',
    },
    musicLessons: { en: 'Music Lessons:', ru: 'Музыкальные уроки:', uk: 'Уроки музики:' },
    musicDesc: {
      en: 'Clarinet and Bass Clarinet (beginner & intermediate)',
      ru: 'Кларнет и бас-кларнет (начальный и средний уровень)',
      uk: 'Кларнет та бас-кларнет (початковий та середній рівень)',
    },
    yearsTutoring: { en: 'Years Tutoring', ru: 'Лет опыта', uk: 'Років досвіду' },
    viewLinkedIn: { en: 'View LinkedIn Profile', ru: 'Профиль LinkedIn', uk: 'Профіль LinkedIn' },
    highlights: {
      honorRoll: { en: 'Honor Roll Student', ru: 'Отличник', uk: 'Відмінник' },
      honorDesc: { en: 'Junior at Tottenville High School', ru: 'Ученик Tottenville High School', uk: 'Учень Tottenville High School' },
      experience: { en: '4+ Years Experience', ru: '4+ года опыта', uk: '4+ роки досвіду' },
      expDesc: { en: 'Pre-K through High School', ru: 'Дошкольный — Старшая школа', uk: 'Дошкільний — Старша школа' },
      music: { en: 'Music Instructor', ru: 'Учитель музыки', uk: 'Вчитель музики' },
      musicDesc: { en: 'Clarinet & Bass Clarinet', ru: 'Кларнет и бас-кларнет', uk: 'Кларнет та бас-кларнет' },
    },
  },

  // Skills
  skills: {
    eyebrow: { en: 'Expertise', ru: 'Экспертиза', uk: 'Експертиза' },
    title: { en: 'Skills & Subjects', ru: 'Навыки и предметы', uk: 'Навички та предмети' },
    subtitle: {
      en: "Comprehensive tutoring across multiple subjects, tailored to each student's needs",
      ru: 'Комплексное репетиторство по нескольким предметам, адаптированное к потребностям каждого ученика',
      uk: 'Комплексне репетиторство з кількох предметів, адаптоване до потреб кожного учня',
    },
    items: [
      {
        en: { title: 'Mathematics', description: 'From basic arithmetic to algebra, geometry, and pre-calculus. Building strong foundations for academic success.' },
        ru: { title: 'Математика', description: 'От базовой арифметики до алгебры, геометрии и предварительного исчисления. Формирование прочной основы для академического успеха.' },
        uk: { title: 'Математика', description: 'Від базової арифметики до алгебри, геометрії та початків математичного аналізу. Формування міцної основи для академічного успіху.' },
      },
      {
        en: { title: 'English & ELA', description: 'Reading comprehension, writing skills, grammar, and vocabulary development for all grade levels.' },
        ru: { title: 'Английский язык', description: 'Понимание прочитанного, навыки письма, грамматика и развитие словарного запаса для всех классов.' },
        uk: { title: 'Англійська мова', description: 'Розуміння прочитаного, навички письма, граматика та розвиток словникового запасу для всіх класів.' },
      },
      {
        en: { title: 'Science', description: 'General science, biology, chemistry fundamentals. Making complex concepts easy to understand.' },
        ru: { title: 'Естественные науки', description: 'Общие науки, биология, основы химии. Делаем сложные концепции понятными.' },
        uk: { title: 'Природничі науки', description: 'Загальні науки, біологія, основи хімії. Робимо складні концепції зрозумілими.' },
      },
      {
        en: { title: 'History & Social Studies', description: 'US History, World History, and Social Studies. Engaging lessons that bring history to life.' },
        ru: { title: 'История', description: 'История США, всемирная история и обществознание. Увлекательные уроки, оживляющие историю.' },
        uk: { title: 'Історія', description: 'Історія США, всесвітня історія та суспільствознавство. Захоплюючі уроки, що оживляють історію.' },
      },
      {
        en: { title: 'Test Preparation', description: 'SHSAT prep, Regents exams, and standardized test strategies to boost your scores.' },
        ru: { title: 'Подготовка к экзаменам', description: 'Подготовка к SHSAT, экзаменам Regents и стратегии стандартизированных тестов для повышения баллов.' },
        uk: { title: 'Підготовка до іспитів', description: 'Підготовка до SHSAT, іспитів Regents та стратегії стандартизованих тестів для підвищення балів.' },
      },
      {
        en: { title: 'Music Lessons', description: 'Clarinet and Bass Clarinet instruction for beginner and intermediate students.' },
        ru: { title: 'Музыкальные уроки', description: 'Обучение игре на кларнете и бас-кларнете для начинающих и учеников среднего уровня.' },
        uk: { title: 'Уроки музики', description: 'Навчання гри на кларнеті та бас-кларнеті для початківців та учнів середнього рівня.' },
      },
    ],
  },

  // Services
  services: {
    eyebrow: { en: 'What I Offer', ru: 'Что я предлагаю', uk: 'Що я пропоную' },
    title: { en: 'My Services', ru: 'Мои услуги', uk: 'Мої послуги' },
    subtitle: {
      en: 'Comprehensive tutoring services tailored to help students succeed',
      ru: 'Комплексные услуги репетиторства для успеха учеников',
      uk: 'Комплексні послуги репетиторства для успіху учнів',
    },
    items: [
      {
        en: { title: 'Math Tutoring', description: 'From basic arithmetic to algebra and geometry. Building strong foundations for success.', subjects: ['Arithmetic', 'Pre-Algebra', 'Algebra', 'Geometry'] },
        ru: { title: 'Математика', description: 'От базовой арифметики до алгебры и геометрии. Формирование прочной основы для успеха.', subjects: ['Арифметика', 'Пре-алгебра', 'Алгебра', 'Геометрия'] },
        uk: { title: 'Математика', description: 'Від базової арифметики до алгебри та геометрії. Формування міцної основи для успіху.', subjects: ['Арифметика', 'Пре-алгебра', 'Алгебра', 'Геометрія'] },
      },
      {
        en: { title: 'ELA / English', description: 'Reading comprehension, writing skills, grammar, and vocabulary for all grade levels.', subjects: ['Reading', 'Writing', 'Grammar', 'Vocabulary'] },
        ru: { title: 'Английский язык', description: 'Понимание прочитанного, навыки письма, грамматика и словарный запас для всех классов.', subjects: ['Чтение', 'Письмо', 'Грамматика', 'Словарный запас'] },
        uk: { title: 'Англійська мова', description: 'Розуміння прочитаного, навички письма, граматика та словниковий запас для всіх класів.', subjects: ['Читання', 'Письмо', 'Граматика', 'Словниковий запас'] },
      },
      {
        en: { title: 'Science', description: 'Making science concepts clear and engaging with hands-on learning approaches.', subjects: ['Life Science', 'Physical Science', 'Earth Science'] },
        ru: { title: 'Естественные науки', description: 'Понятное и увлекательное изложение научных концепций с практическим подходом.', subjects: ['Биология', 'Физика', 'Науки о Земле'] },
        uk: { title: 'Природничі науки', description: 'Зрозуміле та захоплююче викладення наукових концепцій з практичним підходом.', subjects: ['Біологія', 'Фізика', 'Науки про Землю'] },
      },
      {
        en: { title: 'History & Social Studies', description: 'Understanding historical events and social concepts through engaging lessons.', subjects: ['US History', 'World History', 'Geography'] },
        ru: { title: 'История', description: 'Понимание исторических событий и социальных концепций через увлекательные уроки.', subjects: ['История США', 'Всемирная история', 'География'] },
        uk: { title: 'Історія', description: 'Розуміння історичних подій та соціальних концепцій через захоплюючі уроки.', subjects: ['Історія США', 'Всесвітня історія', 'Географія'] },
      },
      {
        en: { title: 'Test Preparation', description: 'Comprehensive prep for standardized tests with proven strategies.', subjects: ['SHSAT Prep', 'Regents Prep', 'Exams'] },
        ru: { title: 'Подготовка к экзаменам', description: 'Комплексная подготовка к стандартизированным тестам с проверенными стратегиями.', subjects: ['SHSAT', 'Regents', 'Экзамены'] },
        uk: { title: 'Підготовка до іспитів', description: 'Комплексна підготовка до стандартизованих тестів з перевіреними стратегіями.', subjects: ['SHSAT', 'Regents', 'Іспити'] },
      },
      {
        en: { title: 'Music Lessons', description: 'Learn clarinet or bass clarinet with patient, step-by-step instruction.', subjects: ['Clarinet', 'Bass Clarinet', 'Music Theory'] },
        ru: { title: 'Музыкальные уроки', description: 'Научитесь играть на кларнете или бас-кларнете с терпеливым пошаговым обучением.', subjects: ['Кларнет', 'Бас-кларнет', 'Теория музыки'] },
        uk: { title: 'Уроки музики', description: 'Навчіться грати на кларнеті або бас-кларнеті з терплячим покроковим навчанням.', subjects: ['Кларнет', 'Бас-кларнет', 'Теорія музики'] },
      },
    ],
    allLevels: { en: 'Students of All Levels Welcome', ru: 'Приглашаем учеников всех уровней', uk: 'Запрошуємо учнів усіх рівнів' },
    levels: {
      en: ['Pre-K', 'Elementary', 'Middle School', 'High School'],
      ru: ['Дошкольный', 'Начальная школа', 'Средняя школа', 'Старшая школа'],
      uk: ['Дошкільний', 'Початкова школа', 'Середня школа', 'Старша школа'],
    },
    bookSession: { en: 'Book a Session', ru: 'Записаться на занятие', uk: 'Записатися на заняття' },
  },

  // Contact
  contact: {
    eyebrow: { en: "Let's Connect", ru: 'Свяжитесь с нами', uk: "Зв'яжіться з нами" },
    title: { en: 'Get In Touch', ru: 'Связаться', uk: "Зв'язатися" },
    subtitle: {
      en: 'Ready to start your learning journey? Reach out today!',
      ru: 'Готовы начать обучение? Свяжитесь сегодня!',
      uk: 'Готові почати навчання? Зверніться сьогодні!',
    },
    email: { en: 'Email', ru: 'Эл. почта', uk: 'Ел. пошта' },
    phone: { en: 'Phone', ru: 'Телефон', uk: 'Телефон' },
    locations: { en: 'Locations', ru: 'Локации', uk: 'Локації' },
    locationsContent: { en: 'Staten Island, Brooklyn, Remote', ru: 'Стейтен-Айленд, Бруклин, удалённо', uk: 'Стейтен-Айленд, Бруклін, дистанційно' },
    availability: { en: 'Availability', ru: 'Доступность', uk: 'Доступність' },
    availabilityContent: { en: 'Flexible scheduling', ru: 'Гибкое расписание', uk: 'Гнучкий розклад' },
    readyTitle: { en: 'Ready to Get Started?', ru: 'Готовы начать?', uk: 'Готові почати?' },
    readyDesc: {
      en: "Fill out our registration form to book tutoring sessions. After submission, I'll contact you by text or email to confirm scheduling.",
      ru: 'Заполните форму регистрации для записи на занятия. После отправки я свяжусь с вами по электронной почте или SMS для подтверждения расписания.',
      uk: 'Заповніть форму реєстрації для запису на заняття. Після відправки я зв\'яжуся з вами електронною поштою або SMS для підтвердження розкладу.',
    },
    bilingualNote: {
      en: 'Russian & Ukrainian language support available',
      ru: 'Доступна поддержка на английском и украинском языках',
      uk: 'Доступна підтримка англійською та російською мовами',
    },
    langSupport: {
      en: { en: 'English', ru: 'Английский', uk: 'Англійська' },
      ru: { en: 'Russian', ru: 'Русский', uk: 'Російська' },
      uk: { en: 'Ukrainian', ru: 'Украинский', uk: 'Українська' },
    },
    langAvailable: {
      en: 'available',
      ru: 'доступен',
      uk: 'доступна',
    },
    registerNow: { en: 'Register Now', ru: 'Записаться', uk: 'Записатися' },
    pricing: {
      en: 'Pricing is flexible and based on your situation.',
      ru: 'Цены гибкие и зависят от вашей ситуации.',
      uk: 'Ціни гнучкі та залежать від вашої ситуації.',
    },
  },

  // Footer
  footer: {
    brand: { en: "Dron's Tutoring", ru: 'Репетиторство Дрона', uk: 'Репетиторство Дрона' },
    description: {
      en: 'Professional academic tutoring and music lessons for students of all ages.',
      ru: 'Профессиональное академическое репетиторство и уроки музыки для учеников всех возрастов.',
      uk: 'Професійне академічне репетиторство та уроки музики для учнів усіх вікових груп.',
    },
    quickLinks: { en: 'Quick Links', ru: 'Быстрые ссылки', uk: 'Швидкі посилання' },
    contactInfo: { en: 'Contact Info', ru: 'Контактная информация', uk: 'Контактна інформація' },
    home: { en: 'Home', ru: 'Главная', uk: 'Головна' },
    aboutMe: { en: 'About Me', ru: 'Обо мне', uk: 'Про мене' },
    skillsLink: { en: 'Skills', ru: 'Навыки', uk: 'Навички' },
    servicesLink: { en: 'Services', ru: 'Услуги', uk: 'Послуги' },
    contactLink: { en: 'Contact', ru: 'Контакты', uk: 'Контакти' },
    location: { en: 'Staten Island & Brooklyn, NY', ru: 'Стейтен-Айленд и Бруклин, Нью-Йорк', uk: 'Стейтен-Айленд та Бруклін, Нью-Йорк' },
    remote: { en: 'Remote Available', ru: 'Удалённо', uk: 'Дистанційно' },
    copyright: {
      en: "Dron's Tutoring Services. All rights reserved.",
      ru: 'Репетиторские услуги Дрона. Все права защищены.',
      uk: 'Репетиторські послуги Дрона. Всі права захищені.',
    },
  },
}

export default translations
