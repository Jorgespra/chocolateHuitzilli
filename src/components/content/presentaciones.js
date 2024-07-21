import styles from "./Presentaciones.module.css";

function Presentaciones() {
   
    return (
        <div className={styles.Present}>
            <h1>¡Haz tu Pedido!</h1>
            <h3>Presentaciones</h3>
            <section className={styles.Cuadro}>
                <div className={styles.CuadroBox}>
                    <h2>250 gr</h2>
                    <p>Perfecto para probar nuestro producto.</p>
                </div>
                <div className={styles.CuadroBox}>
                    <h2>500 gr</h2>
                    <p>Ideal para un consumo regular</p>
                </div>
            </section>
        </div>
    )

}

export default Presentaciones; 