import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/trainings/sports-basic/sports-basic.jpg";

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
                            <p className={styles.sumUpQuote}>
                                ¡Te guiamos para conseguir tu mejor versión!
                            </p>
                            <ul className={styles.customList}>
                                <li>Entrega de una planificación mensual.</li>
                                <li>Entreno personalizado.</li>
                                <li>Sesiones enfocadas a tu deporte.</li>
                                <li>Plan enfocado a la mejora del rendimiento del deportista.</li>
                                <li>Sesiones preventivas (de lesiones) en base al deporte que practicas.</li>
                                <li>Trabajo complementario y compensatorio.</li>
                                <li>Feedback individualizado.</li>
                            </ul>
                            <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
                            <p className={styles.contactMe}>¡Para más información contacta conmigo!</p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={image} placeholder="blur" height={400} width={300} alt="Fitness Basic" priority={true} />
                        </div>
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