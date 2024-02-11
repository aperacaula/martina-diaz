import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/trainings/fitness-basic/fitness-basic.jpg"

const FitnessBasic: React.FC = () => {
  return (
    <Layout
      filledMenu={true}
    >
      <Head>
        <title>Fitness Basic</title>
      </Head>
      <div className={styles.container}>
        <h1>Fitness Basic training</h1>
        <div className={styles.explanation}>
          <div className={styles.textAndImage}>
            <div className={styles.text}>
              <p>
                Este plan permite introducirte en el mundo del fitness, perfecto para los recién llegados. Esta comprensión integral garantiza un viaje de fitness hecho a medida solo para ti.
              </p>
              <p>Atendemos a todos los niveles, estableciendo una base para seguir su progreso. Desde principiantes hasta avanzados, nuestras evaluaciones de condición física garantizan mejoras visibles y mensurables <strong>en relación a su estado de salud.</strong>
              </p>
              <p className={styles.sumUpQuote}>¡Elige este plan para una suave introducción a tu viaje de acondicionamiento físico!</p>
              <ul className={styles.customList}>
                <li>Entrega de una planificación mensual. </li>
                <li>Entreno personalizado.</li>
                <li>Sesiones adaptadas a tu nivel.</li>
                <li>Enfocado 100% a su objetivo personal.</li>
                <li>Feedback individualizado.</li>
              </ul>
              <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
              <p className={styles.contactMe}>¡Para más información contacta conmigo!</p>
            </div>
            <div>
              <Image placeholder="blur" height={400} width={300} alt="Fitness Basic" src={image} />
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

export default FitnessBasic;