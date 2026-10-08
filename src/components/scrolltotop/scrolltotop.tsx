    import { useState, useEffect } from "react";
    import { IoIosArrowUp } from "react-icons/io";
    import "./scrolltotop.css";

    export default function ScrollToTop() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // تقرأ مسافة التمرير الحالية بالبكسل من أعلى الصفحة.
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            setShowScrollBtn(true);
        } else {
            setShowScrollBtn(false);
        }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });// عند اظهار السهم 

        return () => {
        window.removeEventListener("scroll", handleScroll);// عند اخفاء السهم
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <button
        onClick={scrollToTop}
        className={`scroll2Top ${showScrollBtn ? "show" : ""}`} // "scroll2Top show" يضيف كلاس 
        aria-label="Scroll to top" // ميزة لمساعدة ذوي الهمم ومحركات البحث
        >
        <IoIosArrowUp />
        </button>
    );
    }