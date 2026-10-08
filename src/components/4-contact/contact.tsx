import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaEnvelope } from 'react-icons/fa6';
import {Lottie} from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contact.json';

import { useTranslation } from 'react-i18next';

    const Contact : React.FC = () => {
      // 2. استدعاء دالة الترجمة
    const { t } = useTranslation();

    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<string>('');

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showSuccessAnimation, setShowSuccessAnimation] = useState<boolean>(false);
    
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus('Sending...');
    setShowSuccessAnimation(false);

    const formData = new FormData(formRef.current);
    const emailValue = formData.get('email') as string; // name="email" يجلب النص المكتوب في الخانة التي تحتوي على
    const messageValue = formData.get('message') as string; // name="message يجلب النص المكتوب في الخانة التي تحتوي على

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: emailValue,
          message: messageValue,
          name: emailValue,
          title: 'New Portfolio Message'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setShowSuccessAnimation(true);
          setStatus(t('contact.successMsg'));// successMsg
          formRef.current?.reset();// تصفية جميع الخانات ومسح النصوص المكتوبة

          setTimeout(() => {
            setShowSuccessAnimation(false);
            setStatus('');
          }, 5000);
          
        },
        (error) => {
          console.error('EmailJS Full Error:', error);
          setIsSubmitting(false);
          setStatus(`Failed: ${error.text || error.status || 'Unknown error'}`);
        }
      );
  };

    return (
        <section id="contact" className='contact-us'>
            <h1 className='title flex'>
            <span className='icon-envelope'>
                <FaEnvelope />
            </span>
                {t('contact.Contact Us')}
                </h1>
            <p className='description'>
              {t('contact.sendTitle')}
            </p>

            <div className="contact-container flex">
<form ref={formRef} onSubmit={sendEmail} className="contact-form flex">

  <div className="form-group flex">
    
    <label htmlFor="email">{t('contact.emailLabel')}</label>

    <input
      name="email"
      type="email"
      id="email"
      required
      placeholder={t('contact.emailPlaceholder')}
    />
  </div>

  <div className="form-group flex">
    <label htmlFor="message">{t('contact.yourMessage')}</label>

    <textarea
      name="message"
      id="message"
      required
      placeholder={t('contact.messagePlaceholder')}
    />
  </div>

  <button type="submit" className="submit-btn" disabled={isSubmitting}>
    {isSubmitting ? t('contact.sending') || 'Sending...' : t('contact.submit')}
  </button>

  {status && (
    <div className="status-container">
      
      {showSuccessAnimation && (
        <Lottie
          src={doneAnimation}
          autoplay
          loop={true}
          style={{ height: 55 }}
        />
      )}

      <p className="status-message">
        {status}
      </p>

    </div>
  )}

</form>
                  
                  <div className="animation flex">
              <div>
                  <Lottie className='contact-animation'
                    src={contactAnimation}
                    autoplay
                    loop={true}
                    style={{ height: 355 }}
                  />
              </div>
                  </div>

              </div>
          </section>
      );
  }
export default Contact;
