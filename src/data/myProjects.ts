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
    id: 7,
    projectTitle: "React ToDo App",
    category: ["react"],
    imgPath: "./7.jpg.png",
    description: "A React task management app built with Redux Toolkit and Material UI, supporting task filtering, local persistence, and dark mode.",
    descriptionAr: "تطبيق إدارة مهام بـ React مصمم باستخدام Redux Toolkit و Material UI، يدعم تصفية المهام، الحفظ المحلي، والوضع الداكن.",
    githubLink: "https://github.com/mohamedAtef-dev/react-todo-app",
    demoLink: "https://mohamedatef-dev.github.io/react-todo-app/"
  },
  /*
    مثال لإضافة مشروع React مستقبلاً:
    {
      id: 8,
      projectTitle: "React E-Commerce App",
      category: ["react"],
      imgPath: "./8.jpg.png",
      description: "A React task management app built with Redux Toolkit and Material UI, supporting task filtering, local persistence, and dark mode.",
      descriptionAr: "تطبيق إدارة مهام بـ React مصمم باستخدام Redux Toolkit و Material UI، يدعم تصفية المهام، الحفظ المحلي، والوضع الداكن.",
      githubLink: "https://github.com/mohamedAtef-dev/project-repo-name",
      demoLink: "https://mohamedatef-dev.github.io/HTML--ANG--CSS-TEMPLET-ONE/"
    },
  */
];