export interface Project {
    id: number;
    projectTitle: string;
    category: string[];
    imgPath: string;
    githubLink?: string; 
    demoLink?: string;   
    description: string;   // الوصف بالإنجليزية
    descriptionAr: string; // الوصف بالعربية
}
export const myProjects: Project[] = [
  // HTML & CSS
  {
    id: 1,
    projectTitle: "HTML & CSS Template 1",
    category: ["css"],
    imgPath: "./1.jpg.png",
    description: "A responsive design template built using clean HTML5 and modern CSS3 flexbox/grid layout techniques.",
    descriptionAr: "قالب تصميم مستجيب مصمم باستخدام تقنيات CSS3 الحديثة وHTML5 لضمان توافق جميع الشاشات.",
    githubLink: "https://github.com/mohamedAtef-dev/HTML--ANG--CSS-TEMPLET-ONE",
    demoLink: "https://mohamedatef-dev.github.io/HTML--ANG--CSS-TEMPLET-ONE/"
  },
  {
    id: 2,
    projectTitle: "HTML & CSS Template 2",
    category: ["css"],
    imgPath: "./2.jpg.png",
    description: "An advanced multi-section web template emphasizing modern CSS Grid and Flexbox layouts with cross-browser compatibility.",
    descriptionAr: "قالب ويب متقدم متعدد الأقسام يركز على توزيع العناصر باستخدام CSS Grid و Flexbox مع توافق تام مع جميع المتصفحات.",
    githubLink: "https://github.com/mohamedAtef-dev/HTML-And-CSS-Template-two",
    demoLink: "https://mohamedatef-dev.github.io/HTML-And-CSS-Template-two/"
  },
  {
    id: 3,
    projectTitle: "HTML & CSS Landing Page",
    category: ["css"],
    imgPath: "./3.jpg.png",
    description: "A modern, highly conversion-focused landing page designed with SASS/CSS3, custom color schemes, and dynamic interactive sliders.",
    descriptionAr: "صفحة هبوط حديثة ومصممة لجذب المستخدمين، تم إنشاؤها باستخدام SASS/CSS3 مع ألوان مخصصة وسلايدر تفاعلي.",
    githubLink: "https://github.com/mohamedAtef-dev/HTML-And-CSS-Templet-Three",
    demoLink: "https://mohamedatef-dev.github.io/HTML-And-CSS-Templet-Three/"
  },
  {
    id: 4,
    projectTitle: "HTML & CSS Product Page",
    category: ["css"],
    imgPath: "./4.jpg.png",
    description: "An e-commerce product detail page showcasing semantic markup, responsive image galleries, and pixel-perfect UI design.",
    descriptionAr: "صفحة منتج لمتجر إلكتروني تعرض تفاصيل المنتج ببنية دلالية صحيحة، مع معرض صور متجاوب وتصميم دقيق للغاية.",
    githubLink: "https://github.com/mohamedAtef-dev/HTML_And_CSS_Template_Four",
  demoLink: "https://mohamedatef-dev.github.io/HTML_And_CSS_Template_Four/"
  },
  // JavaScript
  {
    id: 5,
    projectTitle: "JavaScript Project",
    category: ["js"],
    imgPath: "./5.jpg.png",
    description: "A dynamic web application powered by Vanilla JavaScript, leveraging asynchronous fetching, DOM manipulation, and LocalStorage.",
    descriptionAr: "تطبيق ويب تفاعلي يعمل بـ JavaScript النقية، يعتمد على جلب البيانات ديناميكياً، والتحكم في عناصر DOM والتخزين المحلي.",
    githubLink: "https://github.com/mohamedAtef-dev/Special-Design",
    demoLink: "https://mohamedatef-dev.github.io/Special-Design/"
  },
  // Bootstrap
  {
    id: 6,
    projectTitle: "Bootstrap Project",
    category: ["bootstrap"],
    imgPath: "./6.jpg.png",
    description: "A mobile-first responsive web design built using Bootstrap 5 utility classes, custom components, and fast-loading layouts.",
    descriptionAr: "مشروع ويب متجاوب يركز على الهواتف أولاً، تم بناؤه باستخدام مكتبة Bootstrap 5 والمكونات المخصصة لسلاسة العرض والتصفح.",
    githubLink: "https://github.com/mohamedAtef-dev/bondi-bootstrap-landing",
  demoLink: "https://mohamedatef-dev.github.io/bondi-bootstrap-landing/"
  },
    {
      id: 8,
      projectTitle: "React Admin Dashboard",
      category: ["react"],
      imgPath: "./8.jpg.png",
      description: "A sleek React Admin Dashboard featuring dynamic routing, optimized form handling with React Hook Form, and responsive Material UI components.",
      descriptionAr: "لوحة تحكم إدارية متجاوبة مبنية باستخدام React، تعتمد على مكتبة Material UI لتوفير مكونات عصرية، وتدعم التوجيه (routing) على جانب العميل، بالإضافة إلى نظام قوي للتحقق من صحة النماذج (form validation) يعتمد على حالة التطبيق (state-driven).",
      githubLink: "https://github.com/mohamedatef-dev/admin-dashboard",
      demoLink: "https://mohamedatef-dev.github.io/admin-dashboard/"
    },
    {
      id: 9,
      projectTitle: "React E-Commerce App",
      category: ["react"],
      imgPath: "./9.jpg.png",
      description: "A full-featured React E-Commerce application integrated with Strapi CMS backend, featuring dynamic product sliders powered by Swiper.js and responsive UI components.",
      descriptionAr: "تطبيق متجر إلكتروني متكامل مبني باستخدام React ومربوط بـ Strapi CMS كلوحة تحكم خلفية، يتميز بشرائح عرض منتجات تفاعلية باستخدام Swiper.js وتصميم متجاوِب بالكامل.",
      githubLink: "https://github.com/mohamedatef-dev/ecommerce-frontend",
      demoLink: "https://mohamedatef-dev.github.io/ecommerce-frontend/"
    },
    {
      id: 10,
      projectTitle: "React E-Commerce store",
      category: ["react"],
      imgPath: "./10.jpg.png",
      description: "An interactive React E-Commerce store fetching real-time data from DummyJSON API, enhanced with Swiper.js sliders, custom React Icons, and seamless notifications via React Hot Toast.",
      descriptionAr: "متجر إلكتروني تفاعلي مبني بـ React يجلب البيانات الحية من DummyJSON API، مُدعم بشرائح عرض عصرية عبر Swiper.js، وأيقونات مخصصة، مع نظام إشعارات سلس باستخدام React Hot Toast.",
      githubLink: "https://github.com/mohamedatef-dev/ecommerce-store",
      demoLink: "https://mohamedatef-dev.github.io/ecommerce-store/"
    },
  //  مثال لإضافة مشروع React مستقبلاً:
];