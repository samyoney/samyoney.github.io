export interface Project {
  title: string
  period: string
  role: string
  category: string
  description: string
  technologies: string[]
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'アイテック 法人向けクラウド電話サービス',
    period: 'May 2026 – Present',
    role: 'Bridge SE / Tech Lead',
    category: 'Cloud Communication',
    description:
      'Leading customer and partner alignment, architecture reviews, security and incident response, acceptance, production migration, and release stabilization across mobile, web administration, APIs, and AWS infrastructure.',
    technologies: ['Kotlin', 'Swift', 'Java', 'TypeScript', 'Spring Boot', 'Vue.js', 'AWS', 'SIP'],
  },
  {
    title: 'Next-generation KS-POS',
    period: 'Jan 2026 – Present',
    role: 'Bridge SE / Tech Lead',
    category: 'POS Architecture',
    description:
      'Leading a multi-platform POS foundation from customer alignment and system architecture to peripheral integration, persistent state, observability, design documentation, and test strategy.',
    technologies: ['C#', '.NET MAUI', 'React', 'TypeScript', 'SQLite', 'Sentry', 'OPOS'],
  },
  {
    title: 'EDION Business Web Systems',
    period: 'May 2025 – Sep 2025',
    role: 'Bridge SE / Senior SE',
    category: 'Web Operations',
    description:
      'Coordinated requirements, incident and impact analysis, implementation reviews, progress, risk, and stable operations across multiple internal business systems.',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'AWS'],
  },
  {
    title: 'Sharp Mobile Application Maintenance',
    period: 'Mar 2025 – May 2025',
    role: 'Bridge SE / Tech Lead',
    category: 'Mobile Platform',
    description:
      'Owned customer communication, code investigation, implementation review, priority decisions, and quality improvement for a large Flutter application on Android and iOS.',
    technologies: ['Dart', 'Flutter', 'Android', 'iOS', 'GitHub'],
  },
  {
    title: 'Ticketing and Payment Cloud Platform',
    period: 'Feb 2025 – May 2025',
    role: 'Bridge SE',
    category: 'Cloud Platform',
    description:
      'Drove requirements, APIs, non-functional design, external payment integration, and delivery planning for a cloud platform supporting ticketing, verification, QR scanning, and printing.',
    technologies: ['PHP', 'Laravel', 'AWS', 'ECS Fargate', 'Aurora MySQL', 'Redis'],
  },
  {
    title: 'S-Point Shared Loyalty Platform',
    period: 'Sep 2024 – Sep 2025',
    role: 'Bridge SE / Tech Lead',
    category: 'Enterprise Integration',
    description:
      'Led requirement clarification, API and batch integration reviews, Japan–Vietnam coordination, shared specifications, and exception handling for a multi-company loyalty platform.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'AWS', 'REST API', 'DataSpider', 'HULFT'],
  },
  {
    title: 'Sharp Field Service Support System',
    period: 'Sep 2024 – Feb 2025',
    role: 'Bridge SE / Tech Lead',
    category: 'Field Operations',
    description:
      'Led customer alignment, Japan–Vietnam coordination, mobile and web enhancements, device integration, printing, and production incident analysis for field repair operations.',
    technologies: ['Kotlin', 'PHP', 'JavaScript', 'WebView', 'Bluetooth', 'Symfony'],
  },
  {
    title: 'Seikyo Digital Edition',
    period: 'Mar 2024 – Sep 2024',
    role: 'Senior SE',
    category: 'Digital Publishing',
    description:
      'Designed and implemented reading and distribution capabilities across Android and iOS while aligning behavior and screen specifications between both platforms.',
    technologies: ['Objective-C', 'Java', 'UIKit', 'SQLite', 'Android', 'iOS'],
    imgSrc: '/static/images/seikyou-ios.png',
    href: 'https://www.seikyoonline.com/',
  },
  {
    title: 'Paris Miki iPad Inventory Application',
    period: 'Dec 2023 – Mar 2024',
    role: 'Senior SE',
    category: 'Retail Mobile',
    description:
      'Designed and implemented inventory search, confirmation, updates, and real-time synchronization for an iPad application used in retail stores.',
    technologies: ['Swift', 'SwiftUI', 'SQLite', 'iPadOS', 'Real-time Sync'],
    imgSrc: '/static/images/ipad-paris-miki.png',
    href: 'https://www.paris-miki.co.jp/',
  },
  {
    title: 'Fatigue Measurement Application',
    period: 'Aug 2023 – Dec 2023',
    role: 'Tech Lead',
    category: 'Computer Vision',
    description:
      'Led project setup, image analysis, machine-learning integration, and delivery for a mobile application that evaluates fatigue from eyelid and pupil data.',
    technologies: ['Swift', 'Kotlin', 'Jetpack Compose', 'TensorFlow', 'Vision', 'Realm'],
    imgSrc: '/static/images/itami-ios.png',
  },
  {
    title: 'e-Orico Mobile Security Enhancement',
    period: 'Aug 2023 – Nov 2023',
    role: 'Senior SE',
    category: 'Fintech Security',
    description:
      'Strengthened authentication, encryption, data protection, and automated testing for a major financial mobile application.',
    technologies: ['Swift', 'Kotlin', 'Realm', 'Encryption', 'Automated Testing'],
    imgSrc: '/static/images/orico-ios.png',
    href: 'https://www.orico.co.jp/',
  },
  {
    title: 'GMO Click CFD',
    period: 'May 2021 – Jun 2023',
    role: 'Tech Lead',
    category: 'Fintech Mobile',
    description:
      'Led technical direction, design reviews, quality, and release management for a CFD trading application with real-time prices, charts, orders, and news.',
    technologies: ['Kotlin', 'Realm', 'MVVM', 'Android', 'Automated Testing'],
    imgSrc: '/static/images/android-cfd.png',
    href: 'https://www.click-sec.com/corp/guide/cfd/',
  },
  {
    title: 'Adam byGMO NFT Viewer',
    period: 'Feb 2021 – May 2021',
    role: 'Tech Lead',
    category: 'Cross-platform Mobile',
    description:
      'Led project launch, UI and image-processing design, task management, and Flutter delivery for a cross-platform NFT viewing application.',
    technologies: ['Dart', 'Flutter', 'SQLite', 'TensorFlow', 'Android', 'iOS'],
    imgSrc: '/static/images/android-adam.png',
    href: 'https://adam.jp/ja/',
  },
  {
    title: 'GMO Click FXneo for Apple Watch',
    period: 'Oct 2020 – Feb 2021',
    role: 'Senior SE',
    category: 'Wearable Fintech',
    description:
      'Designed and implemented prices, positions, orders, and notifications for Apple Watch, optimizing interaction and performance for a compact screen.',
    technologies: ['Swift', 'SwiftUI', 'WatchKit', 'Realm', 'watchOS', 'iOS'],
    imgSrc: '/static/images/fx-watch.png',
    href: 'https://www.click-sec.com/corp/tool/fxwatch_apple/',
  },
  {
    title: 'GMO Financial Mobile Test Automation Platform',
    period: 'Jun 2020 – Jun 2023',
    role: 'Tech Lead',
    category: 'Quality Engineering',
    description:
      'Built and standardized automated test foundations across multiple Android and iOS financial applications, reducing manual verification and stabilizing quality.',
    technologies: ['Kotlin', 'Swift', 'Espresso', 'XCUITest', 'Android', 'iOS'],
    imgSrc: '/static/images/xcuitest-card.png',
  },
  {
    title: 'GMO Coin',
    period: 'Aug 2019 – Jun 2023',
    role: 'Senior SE',
    category: 'Crypto Fintech',
    description:
      'Designed, implemented, and improved trading, charts, deposits, withdrawals, notifications, two-factor authentication, and encrypted data handling.',
    technologies: ['Kotlin', 'Realm', 'MVVM', '2FA', 'Encryption', 'Android'],
    imgSrc: '/static/images/android-coin.png',
    href: 'https://coin.z.com/jp/',
  },
  {
    title: 'GMO Click FXneo',
    period: 'Jul 2018 – Jun 2023',
    role: 'Senior SE',
    category: 'FX Trading',
    description:
      'Owned screens, core trading functions, API integration, financial data handling, exception design, and continuous quality improvement for a large FX application.',
    technologies: ['Kotlin', 'Realm', 'MVVM', 'REST API', 'Android'],
    imgSrc: '/static/images/android-fx.png',
    href: 'https://www.click-sec.com/corp/guide/fxneo/',
  },
  {
    title: 'Regional Pharmacy Search Application',
    period: 'Feb 2018 – Jul 2018',
    role: 'Software Engineer',
    category: 'Location Services',
    description:
      'Implemented nearby pharmacy search, maps, directions, ratings, external APIs, and local data management for an Android application.',
    technologies: ['Java', 'Android', 'SQLite', 'Maps API', 'Location Services'],
  },
  {
    title: 'Viettel Smart Home IoT Platform',
    period: 'Jan 2017 – Feb 2018',
    role: 'Software Engineer',
    category: 'IoT Platform',
    description:
      'Built hardware circuits, MQTT services, Android control applications, authentication, and encryption for a smart-home platform controlling residential equipment.',
    technologies: ['Arduino', 'C++', 'Java', 'MQTT', 'SQLite', 'CentOS', 'Android'],
  },
]

export default projectsData
