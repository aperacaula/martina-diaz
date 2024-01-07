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
                Ideal para aquellas personas que tienen experiencia en fitness, este plan mejora su rutina con entrenamiento personalizado, con objetivos más concretos. Elige esto para llevar tu condición física al siguiente nivel.
              </p>
              <ul>
                <li>Entreno personalizado.</li>
                <li>Sesiones adaptadas a tu nivel.</li>
                <li>Enfocado 100% a su objetivo personal.</li>
                <li>Entrega de una planificación mensual.</li>
                <li>4 sesiones de entrenamientos por semana.</li>
                <li>Feedback y contacto semanal.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessPro;