import React, {useState} from 'react';
import styles from './ContactFormModal.module.css';
import axios from 'axios';

function ContactFormModal({ closeModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = process.env.REACT_APP_BACKEND_URL;
        const endpoint = '/send-email';

        try {
            const response = await axios.post(apiUrl + endpoint, { name, email, subject, text });
            setStatus(response.data);
            setName('');
            setEmail('');
            setSubject('');
            setText('');
        } catch (error) {
            setStatus('Error al enviar el correo');
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                <h2>Escríbenos</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Asunto:
                        <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="text" value={text} onChange={(e) => setText(e.target.value)} required></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
}

export default ContactFormModal;
