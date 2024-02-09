import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const SportsPro: React.FC = () => {
    return (
        <Layout
            filledMenu={true}
        >
            <Head>
                <title>Sports Pro</title>
            </Head>
            <div className={styles.container}>
                <h1>Sports Pro training</h1>
                <div className={styles.explanation}>
                    <div className={styles.textAndImage}>
                        <div>
                            <Image src="/trainings/sports-pro/sports-pro.jpg" height={400} width={350} alt="Fitness Basic" loading="lazy" />
                        </div>
                        <div className={styles.text}>
                            <p>
                                Diseñado para deportistas y/o atletas profesionales o semi profesionales que de forma individual quieran optimizar su rendimiento.  Este plan integral optimiza su rendimiento con un régimen de entrenamiento intenso y un seguimiento muy preciso del progreso.
                            </p>
                            <p>
                                Asimismo, educamos a su cuerpo con ejercicios tanto complementarios como compensatorios para evitar desequilibrios musculares debidos a las demandas físicas del propio deporte y creamos planes preventivos para evitar lesiones.
                            </p>
                            <ul className={styles.customList}>
                                <li>Entrega de una planificación semanal.</li>
                                <li>Entreno personalizado.</li>
                                <li>Enfocado 100% a sacar el máximo rendimiento personal.</li>
                                <li>Sesiones adaptadas a tu deporte.</li>
                                <li>Sesiones preventivas (de lesiones) en base al deporte que practicas.</li>
                                <li>Trabajo complementario y compensatorio.</li>
                                <li>Feedback individualizado.</li>
                            </ul>
                            <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
                            <p className={styles.contactMe}>¡Para más información contacta conmigo!</p>
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

export default SportsPro;