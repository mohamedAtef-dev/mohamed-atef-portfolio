import '../../i18n';
import { useState } from 'react';
import './main.css';
import { FaLink, FaGithub, FaArrowRight} from 'react-icons/fa6';

import { myProjects, type Project } from '../../data/myProjects';
import { AnimatePresence, motion } from 'motion/react'; //  AnimatePresence   => filtering خصوصًا أثناء ال  Dom لمراقبة العناصر التي تدخل وتخرج من الـ 

import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const FILTER_CATEGORIES = [
  { key: 'all', labelKey: 'main.all' },
  { key: 'css', labelKey: 'main.css' },
  { key: 'js', labelKey: 'main.js' },
  { key: 'bootstrap', labelKey: 'main.bootstrap' },
  { key: 'react', labelKey: 'main.react' },
  { key: 'next', labelKey: 'main.next' },
] as const;

const Main = () => {
    const { t } = useTranslation();
    const [currentActive, setCurrentActive ] = useState<string>("all");

    const filteredProjects : Project[] = myProjects.filter((item) => {
        if (currentActive === "all") return true;
        return item.category.includes(currentActive);
    });

    return (
    <main className='projects-container flex'>

        <section className="left-section projects-section flex" id="projects">

    {FILTER_CATEGORIES.map(({key, labelKey}) => (
                <button 
                key={key}
                    onClick={() => setCurrentActive(key)} 
                    className={currentActive === key ? 'active' : ''}
                    aria-pressed={currentActive === key}>
                    {t(labelKey)}
                </button>
                    ))}
    </section>

        <section className="right-section flex">

            <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((item: Project) => (
                        <motion.article
                        key={item.id}
                            layout
                            // 1. الحالة الابتدائية: شفافية 0 مع نزول لأسفل ومقياس أصغر قليلاً
                            initial={{ opacity: 0, y: 40, scale: 0.8 }} 

                            // 2. الحركة عند وصول السكرول للكارت داخل الشاشة
                            whileInView={{ opacity: 1, y: 0, scale: 1 }} 

                            // 3. الحركة عند الخروج/التصفية بواسطة AnimatePresence
                            exit={{ opacity: 0, scale: 0.6 }}

                            // 4. ضبط السكرول: يشتغل مرة واحدة وعند ظهور 20% من الكارت
                            viewport={{ once: false, amount: 0.2 }}

                            // 5. ضبط وقت وسلاسة الحركة
                            transition={{ 
                                type: "spring", 
                                damping: 14, 
                                stiffness: 80,
                                opacity: { duration: 0.3 }
                            }}

        className='card'>
        <img width={266} src={item.imgPath} alt={item.projectTitle} loading="lazy"/>
        <div  className="box"> {/* style={{width: '266px'}} */}
        <h1 className="title">{item.projectTitle}</h1>
            <p className="sub-title">
                {i18n.language === 'ar' ? item.descriptionAr : item.description}
            </p>

                    <div className="flex icons">
                            <div className="flex action-icons">

                                {item.demoLink && (
                                    <a 
                                        href={item.demoLink} 
                                        target="_blank" 
                                        rel="noreferrer" aria-label={`GitHub Repository for ${item.projectTitle}`} 
                                        className="icon-link"
                                    >
                                        <FaLink />
                                    </a>
                                )}
                                
                                {item.githubLink && (
                                    <a 
                                        href={item.githubLink} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        aria-label={`GitHub Repository for ${item.projectTitle}`}
                                        className="icon-github"
                                    >
                                        <FaGithub />
                                    </a>
                                )}

                        </div>
                        {item.demoLink && (
                                <a className='link flex' href={item.demoLink} target="_blank" rel="noreferrer">
                                    <span>{t('main.more')}</span>
                                <FaArrowRight className="icon-arrow-right" />
                                </a>
                            )}
                    </div>
                </div>
            </motion.article>
            ))}

            </AnimatePresence>

        </section>
    </main>
    );
};
export default Main;


// React State لتحديد الـ category المختارة.
// Filtering لتصفية المشاريع.
// i18next للترجمة عربي/إنجليزي.
// Motion لعمل animations للكروت.
// وفي الآخر عرض روابط GitHub وDemo لكل مشروع.

// هشرحهولك من فوق لتحت، وبعدها أربطلك كل جزء بالصورة الكبيرة.

// myProjects
//     │
//     ▼
// currentActive
//     │
//     ▼
// filter()
//     │
//     ▼
// filteredProjects
//     │
//     ▼
// map()
//     │
//     ▼
// motion.article
//     │
//     ├── image
//     ├── title
//     ├── description
//     ├── GitHub
//     └── Demo


// ,



// FILTER_CATEGORIES
//         │
//         ▼
//       map()
//         │
//         ▼
//      Buttons
//         │
//         ▼
//      onClick
//         │
//         ▼
// setCurrentActive()
//         │
//         ▼
//  React Re-render
//         │
//         ▼
//  filter projects again