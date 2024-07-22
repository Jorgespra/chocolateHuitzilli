import React, { useState, useEffect, useRef } from 'react';
import styles from './Cabecera.module.css';
import ContactFormModal from './ContactFormModal'; 

function Cabecera(params) {
    const [headerHidden, setHeaderHidden] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            setHeaderHidden(false);

            timerRef.current = setTimeout(() => {
                setHeaderHidden(true);
            }, 15000);
        };

        window.addEventListener('scroll', handleScroll);

        timerRef.current = setTimeout(() => {
            setHeaderHidden(true);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <header className={`${styles.cabecera} ${headerHidden ? styles.hidden : ''}`}>
                <nav className={styles.nav}>
                    <button className={styles.botonNav} onClick={openModal}>
                        Escribenos
                    </button>
                    <a href="https://api.whatsapp.com/send?phone=3328656603" target="_blank" rel="noopener noreferrer" className={styles.alink}>
                        <button className={styles.botonNav}>
                            WhatsApp
                        </button>
                    </a>
                </nav>
            </header>
            {isModalOpen && <ContactFormModal closeModal={closeModal} />}
        </div>
    );
}

export default Cabecera;





