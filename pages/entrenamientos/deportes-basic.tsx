import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";

const DeportesBasic: React.FC = () => {
    return (
        <Layout
            darkMenu={true}
        >
            <Head>
                <title>Deportes Basic</title>
            </Head>
            <div className={styles.container}>
                <h1>Deportes Basic training</h1>
                <div className={styles.explanation}>
                    <div className={styles.textAndImage}>
                        <div className={styles.text}>
                            <p>
                                Diseñado para aquellas personas deportistas que no cuentan con las herramientas para poder entrenar en base a su modalidad deportiva. Este plan ofrece una planificación totalmente enfocada al deporte que practicas, garantizando una mejora de tu rendimiento.
                            </p>
                            <ul>
                                <li>Entreno personalizado.</li>
                                <li>Sesiones adaptadas a tu deporte.</li>
                                <li>Enfocado a la mejora del rendimiento del deportista.</li>
                                <li>Entrega de una planificación mensual. </li>
                                <li>2 sesiones de entrenamientos por semana.</li>
                                <li>Feedback y contacto semanal.</li>
                            </ul>
                        </div>
                        <Image src="/trainings/fitness-basic/fitness-basic-1.jpg" width={600} height={500} alt="Fitness Basic" loading="lazy" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DeportesBasic;