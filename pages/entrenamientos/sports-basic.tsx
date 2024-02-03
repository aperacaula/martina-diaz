import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const SportsBasic: React.FC = () => {
    return (
        <Layout
            filledMenu={true}
        >
            <Head>
                <title>Sports Basic</title>
            </Head>
            <div className={styles.container}>
                <h1>Sports Basic training</h1>
                <div className={styles.explanation}>
                    <div className={styles.textAndImage}>
                        <div className={styles.text}>
                            <p>
                                Diseñado para aquellas personas deportistas que no cuentan con las herramientas para poder entrenar en base a su modalidad deportiva. Este plan ofrece una planificación totalmente enfocada al deporte que practicas, garantizando una mejora de tu rendimiento.
                            </p>
                            <p>
                                ¡Te guiamos para conseguir tu mejor versión!
                            </p>
                            <ul>
                                <li>+Entrega de una planificación mensual.</li>
                                <li>Entreno personalizado.</li>
                                <li>Sesiones enfocadas a tu deporte.</li>
                                <li>Enfocado a la mejora del rendimiento del deportista.</li>
                                <li>Trabajo complementario y compensatorio.</li>
                                <li>Feedback individualizado.</li>
                            </ul>
                            <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
                        </div>
                        <Image src="/trainings/fitness-basic/fitness-basic-1.jpg" width={600} height={500} alt="Fitness Basic" loading="lazy" />
                    </div>
                </div>
                <Link className={styles.goBack} href="/">
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faBackward} size="sm" />
                    </div>
                    Volver
                </Link>
            </div>
        </Layout>
    )
}

export default SportsBasic;