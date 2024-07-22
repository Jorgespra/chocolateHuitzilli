import styles from "./NuestrosProductos.module.css"

function Productos() {
  
    return(
        <section className={styles.ProductContainer}>
                <h1 className={styles.tituloPrincipal}>Nuestros Productos</h1>
                <div className={styles.ProductBox}>
                    <div className={styles.boxProduct}>
                        <h1>Chocolate Amargo</h1>
                        <p>Se distingue por su elaboración meticulosa y alto contenido de cacao, sin añadir azúcar. Esto resulta en un sabor intenso y complejo con un amargor equilibrado, ideal para disfrutar como un bocado gourmet.</p>

                    </div>
                    <div className={styles.boxProduct}>
                        <h1>Chocolate Semi Dulce</h1>
                        <p>Elaborado cuidadosamente con un contenido moderado de cacao y un toque de azúcar. Ofrece un equilibrio entre dulzura y sabor de cacao, adecuado para quienes prefieren un chocolate menos amargo pero aún con notas ricas y complejas, perfecto para disfrutar como un bocado gourmet.</p>
                    </div>

                    <div className={styles.boxProduct}>
                        <h1>Chocolate Dulce</h1>
                        <p>Preparado con un contenido generoso de azúcar que equilibra su sabor suave y dulce. Ideal para aquellos que prefieren un chocolate con menos amargor y más dulzura, manteniendo una textura suave y una experiencia indulgente al paladar.</p>

                    </div>

                    <div className={styles.boxProduct}>
                        <h1>Chocolate Almendrado</h1>
                        <p>Combina cacao de alta calidad con almendras tostadas, troceadas y un toque de canela, ofreciendo un sabor rico y una textura crujiente. Esta combinación de ingredientes proporciona una experiencia gourmet satisfactoria y deliciosa, ideal para los amantes de sabores complejos y armoniosos.</p>
                    </div>



                </div>
            </section>
    )
    
}

export default Productos;