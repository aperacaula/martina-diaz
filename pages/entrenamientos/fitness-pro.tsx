import Layout from "../../components/Layout/Layout";
import styles from "../../styles/trainings.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import image from '../../public/trainings/fitness-pro/fitness-pro.jpg'

const FitnessPro: React.FC = () => {
  return (
    <Layout
      filledMenu={true}
    >
      <Head>
        <title>Fitness Pro</title>
      </Head>
      <div className={styles.container}>
        <h1>Fitness Pro training</h1>
        <div className={styles.explanation}>
          <div className={styles.textAndImage}>
            <div>
              <Image
                placeholder="blur"
                src={image}
                height={400}
                width={300}
                alt="Fitness Basic"
                priority={true}
              />
            </div>
            <div className={styles.text}>
              <p>
                Ideal para aquellas personas que tienen experiencia en fitness. Este plan mejora tu rutina con entrenamiento personalizado, objetivos más concretos y con un seguimiento más detallado y preciso.
              </p>
              <p className={styles.sumUpQuote}>¡Elige este plan para llevar tu condición física al siguiente nivel!</p>
              <ul className={styles.customList}>
                <li>Entrega de una planificación semanal.</li>
                <li>Entreno personalizado.</li>
                <li>Sesiones adaptadas a tu nivel.</li>
                <li>Enfocado 100% a tus objetivos.</li>
                <li>Feedback individualizado.</li>
              </ul>
              <p className={styles.remark}>*El número de sesiones de entrenamiento semanales será independiente al <strong>plan</strong> que se escoja. Es decir, dependerá de la disponibilidad de días que tengas durante la semana.</p>
              <p className={styles.contactMe}>¡Para más información contacta conmigo!</p>
            </div>
          </div>
          <Link className={styles.goBack} href="/">
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faBackward} size="sm" />
            </div>
            Volver
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default FitnessPro;