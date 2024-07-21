import styles from "./Content.module.css"
import { GiChocolateBar } from "react-icons/gi";
import Productos from "./nuestrosProductos.js"
import Presentaciones from "./presentaciones.js";
import Entrega from "./entrega.js";
import cajaMadera from "./ChocolateEnCajaMadera.jpg"


function Content() {
    
    return (
        <>
            <section className={styles.imagenAlaDerecha}>
                <div className={styles.texto} >
                    <h1 >Beneficios del Chocolate Artesanal</h1>
                    <ul>
                        <li><GiChocolateBar />Ingredientes Naturales: Elaborado sin aditivos ni conservantes artificiales, garantizando un producto puro y saludable.</li>
                        <li><GiChocolateBar />Mayor Contenido de Cacao: Rico en antioxidantes que protegen el cuerpo y mejoran la salud cardiovascular.</li>
                        <li><GiChocolateBar />Menos Azúcar: Resalta los sabores naturales del cacao y es una opción más saludable para el consumo diario.</li>
                        <li><GiChocolateBar />Nutrientes Esenciales: Fuente de magnesio, hierro y zinc, minerales importantes para la salud ósea y el sistema inmunológico.</li>
                        <li><GiChocolateBar />Variedad de Sabores: Ofrece mezclas únicas y personalizadas que proporcionan una experiencia rica y diversa.</li>
                        <li><GiChocolateBar />Arte y Calidad: Cada pieza se elabora con cuidado y atención al detalle, resultando en un producto de alta calidad.</li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={cajaMadera} alt="Chocolate en Caja de Madera" />
                </div>
            </section>
            <section>
                <Productos />
            </section>
            <section>
                <Presentaciones />
            </section>
            <section>
                <Entrega />
            </section>


        </>
    )



}

export default Content