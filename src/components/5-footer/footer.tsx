import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    // الحصول على السنة الحالية تلقائياً
  const currentYear = new Date().getFullYear();
    // دالة للتحكم في التمرير السلس إلى القسم المطلوب
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <footer className="flex">
<ul className="flex">
                <li>
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
                        {t('footer.about')}
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
                        {t('footer.projects')}
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                        {t('footer.contact')}
                    </a>
                </li>
            </ul>

            <p>© {currentYear} {t('footer.rights')}</p>
        </footer>
    );
}
export default Footer;



// بدلاً من تكرار عناصر <li> يدوياً، يمكنك وضعهما في مصفوفة بسيطة أعلى المكون
{/* <footer className="flex">
      <ul className="flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={(e) => handleScroll(e, link.id)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <p>© {currentYear} Mohamed Atef. All rights reserved.</p>
    </footer> */}