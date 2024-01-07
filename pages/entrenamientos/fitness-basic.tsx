import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";

const FitnessBasic: React.FC = () => {
  return (
    <Layout
      darkMenu={true}
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
                Perfecto para los recién llegados al fitness, este plan te permite introducirte en el mundo del fitness. Elige este plan para una suave introducción a tu viaje de acondicionamiento físico.
              </p>
              <p>
                Comenzamos con una encuesta sobre el estilo de vida, tu historial y tus objetivos.
                Esta comprensión integral garantiza un viaje de fitness hecho a medida solo para ti.
              </p>
              <p>Atendemos a todos los niveles, estableciendo una base para seguir su progreso. Desde principiantes hasta avanzados, nuestras evaluaciones de condición física garantizan mejoras visibles y mensurables <strong>en relación a su estado de salud.</strong>
              </p>
              <ul>
                <li>Entrega de una planificación mensual. </li>
                <li>Entreno personalizado.</li>
                <li>Sesiones adaptadas a tu nivel.</li>
                <li>Enfocado 100% a su objetivo personal.</li>
                <li>Feedback individualizado.</li>
              </ul>
              <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
            </div>
            <Image src="/trainings/fitness-basic/fitness-basic-1.jpg" width={600} height={500} alt="Fitness Basic" loading="lazy" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessBasic;