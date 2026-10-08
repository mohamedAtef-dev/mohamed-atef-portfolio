import './hero.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa6';
import {Lottie} from "lottie-react";
import devAnimation from '../../animation/dev.json';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
// 2. استدعاء دالة الترجمة
    const { t, i18n } = useTranslation();

    const text = t('hero.title');

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        count.set(0);
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 3,
            ease: "linear",
        });
        return controls.stop;
    }, [count, text, i18n.language]);


    return (
        <section className="hero about-section flex" id="about" >
            <div className="left-section">
                <div className="parent-avatar">
                    <motion.img initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 3, type: "spring" }}
                    src="./mo.jpg-modified.png" className="avatar" alt="Mohamed" />
                    <BsPatchCheckFill className='icon-true'/>
                </div>

{/* 5. استبدال الـ h1 بالكود الجديد مع مؤشر الكتابة | */}
                <h1 className='title'>
                    <motion.span>{displayText}</motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{ display: "inline-block", marginLeft: "4px" }}
                    >
                        |
                    </motion.span>
                </h1>

                <p className='sub-title'>
                    "{t('hero.subTitle')}"                
                </p>
                <div className='all-icons flex'>
                    <a 
                        href="https://github.com/mohamedAtef-dev"
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="GitHub Profile" 
                        className="icon"
                    >
                    <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/mohamed-atef-6511a3355"
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="LinkedIn Profile" 
                        className="icon"
                    >
                    <FaLinkedin />
                    </a>
                    <a 
                        href="https://wa.me/201090538120" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="WhatsApp" 
                        className="icon"
                    > 
                    <FaWhatsapp />
                    </a>
                    <a 
                        href="https://t.me/MohamedAtef" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Telegram" 
                        className="icon"
                    >
                    <FaTelegram />
                    </a>
                </div>
            </div>
            <div className="right-section">
                <Lottie className='developAnimation'
                    src={devAnimation}
                    autoplay
                    style={{ height: 355 }}
                />
            </div>
        </section>
    );
}                                        
export default Hero;