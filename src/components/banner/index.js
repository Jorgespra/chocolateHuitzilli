import React from 'react';
import styles from './Banner.module.css';
import logo from './LogoColibri.png';

function Banner() {
    console.log("banner");
       return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.cajaLogoMarca}>
                    <img className={styles.formatoLogo} src={logo} alt="logoColibri" />
                    <h1 className={styles.chocolate}>Chocolate</h1>
                    <p className={styles.huitzilli} >Huitzilli</p>
                </div>

            </div>
        </section>
    )
}

export default Banner;
