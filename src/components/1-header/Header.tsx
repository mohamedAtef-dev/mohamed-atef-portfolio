    import {  useState, useEffect } from 'react';
    import { useTranslation } from 'react-i18next';
    import './header.css';
    import { Moon, X, Menu, Sun } from 'lucide-react';
    import { useTheme } from "../../context/useTheme";
    import { AnimatePresence, motion } from 'motion/react';

    const Header= () => {
        const [showModal, setshowModal] = useState(false);
        const {theme, toggleTheme} = useTheme();
        const { t, i18n } = useTranslation();

        const handleLinkClick = () => {
        setshowModal(false);
    };

    // دالة التبديل بين اللغتين
    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    // تغيير اتجاه الصفحة (dir) ولغة Document تلقائياً
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

        return (
        <header className="flex">
            {/* Button Menu */}
            <button aria-label="Show menu"
            className='icon-menu flex'
            onClick={() => {
                setshowModal(true);       
            }}>
            <Menu />
            </button>
            {/* Button Language */}
            <button onClick={toggleLanguage} className="lang-btn icon flex">
            {i18n.language === 'ar' ? 'EN' : 'Ar'}
            </button>
            <div /> 

            {/* Navigation (Desktop) */}
            <nav>
                <ul className="flex">
                <li><a href="#about">{t('header.about')}</a></li>
                <li><a href="#projects">{t('header.projects')}</a></li>
                <li><a href="#contact">{t('header.contact')}</a></li>
                </ul>
            </nav>
            {/* Button Theme */}
            <button onClick={toggleTheme}
            className='icon-moon flex'
            aria-label="Toggle theme">
                {theme === "light" ? (
                <Sun size={20} className="theme-icon sun-icon" />
                ) : (
                <Moon size={20} className="theme-icon moon-icon" />
                )}
            </button>
            {/* <button> Light </button> */}

    {/* Navigation Modal (Mobile) */}
    <AnimatePresence>
            {showModal && (
                <div className="fixed">
                    <motion.div 
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleLinkClick}
                    />

    {/* Modal Box */}
            <motion.ul 
                    className="modal"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.175, 0.885, 0.32, 1.275] }}
                >
                    <li>
                        <button 
                        className='icon-close'
                        aria-label="Close modal" // خاصة بقارئ الشاشة
                        onClick={handleLinkClick}>
                            <X />
                        </button>
                    </li>

                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </motion.ul>
                </div>
    )}
    </AnimatePresence>
        </header>
        )
    }

export default Header;
