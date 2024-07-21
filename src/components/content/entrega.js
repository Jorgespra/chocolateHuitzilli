import styles from "./Entrega.module.css"

function Entrega() {
  
    return (
        <div className={styles.BoxEntrega}>
            <h1>¡Recoge tú Pedido en los Siguientes Puntos!</h1>
            <div className={styles.boxAddress}>

                <a href="https://www.google.com/maps/search/?api=1&query=C.+José+María+Vigil+No.+2991,+Col.+Providencia" target="_blank" rel="noopener noreferrer" className={styles.boxindividual}>
                    <div>
                        <h2>ALULA</h2>
                        <p>C. José María Vigil No. 2991, Col. Providencia </p>
                        <div className={styles.horarios}>
                            <h3>Martes a Sábados</h3>
                            <p>10:00 a 18:00</p>
                            <h3>Domingos</h3>
                            <p>10:00 a 14:00</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/maps/search/?api=1&query=C.+Progreso+No.+500-int+b,+Col.+Americana" target="_blank" rel="noopener noreferrer" className={styles.boxindividual}>
                    <div>
                        <h2>COCORA</h2>
                        <p>C. Progreso No. 500-int b, Col. Americana </p>
                        <div className={styles.horarios}>
                            <h3>Lunes a Viernes</h3>
                            <p>10:00 a 18:00</p>
                            <h3>Sábados</h3>
                            <p>10:00 a 16:00</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/maps/search/?api=1&query=Av.+Camino+Real+a+Colima+No.+546,+Col.+Santa+Anita" target="_blank" rel="noopener noreferrer" className={styles.boxindividual}>
                    <div>
                        <h2>ESPACIO SUR</h2>
                        <p>Av. Camino Real a Colima No. 546, Col. Santa Anita </p>
                        <div className={styles.horarios}>
                            <h3>Lunes a Viernes</h3>
                            <p>11:00 a 18:00</p>
                            <h3>Sábados</h3>
                            <p>09:00 a 14:00</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/maps/search/?api=1&query=Camino+Viejo+a+Tesistan+No.+3702+local+4" target="_blank" rel="noopener noreferrer" className={styles.boxindividual}>
                    <div>
                        <h2>CASA IMPERIAL</h2>
                        <p>Camino Viejo a Tesistan No. 3702 local 4 </p>
                        <div className={styles.horarios}>
                            <h3>Lunes a Viernes</h3>
                            <p>10:00 a 19:00</p>
                            <h3>Sábados</h3>
                            <p>10:00 a 15:00</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Entrega
