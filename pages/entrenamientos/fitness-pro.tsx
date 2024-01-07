import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";

const FitnessPro: React.FC = () => {
  return (
    <Layout
      darkMenu={true}
    >
      <Head>
        <title>Fitness Pro</title>
      </Head>
      <div className={styles.container}>
        <h1>Fitness Pro training</h1>
        <div className={styles.explanation}>
          <div className={styles.textAndImage}>
            <Image src="/trainings/fitness-basic/fitness-basic-1.jpg" width={600} height={500} alt="Fitness Pro" loading="lazy" />
            <div className={styles.text}>
              <p>
                Ideal para aquellas personas que tienen experiencia en fitness. Este plan mejora tu rutina con entrenamiento personalizado, objetivos más concretos y con un seguimiento más detallado y preciso.
              </p>
              <p>
                Comenzamos con una encuesta sobre el estilo de vida, tu historial y tus objetivos. Seguimos con la realización de unos test para una valoración inicial y un control en la composición corporal (opcional).
              </p>
              <p>¡Elige este plan para llevar tu condición física al siguiente nivel!</p>
              <ul>
                <li>Entrega de una planificación semanal.</li>
                <li>Entreno personalizado.</li>
                <li>Sesiones adaptadas a tu nivel.</li>
                <li>Enfocado 100% a tus objetivos.</li>
                <li>Feedback individualizado.</li>
              </ul>
              <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessPro;