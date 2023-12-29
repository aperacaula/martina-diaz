import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireFlameSimple, faFireFlameCurved, faMountain, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Martina Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.backgroundImage}>
          <Image
            src="/background.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            Martina Díaz
          </h1>

          <p className={styles.description}>
            Cada persona es única y por ello necesita una rutina personalizada <br />
            adaptada 100% a sus necesidades, capacidades y aptitudes.
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/entrenamientos/fitness-basic" className={styles.card}>
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faFireFlameSimple} />
            </div>
            <h3>FITNESS Basic</h3>
            <p>
              Perfecto para los recién llegados al fitness, este plan te permite introducirte en el mundo del fitness.
            </p>
          </Link>

          <Link
            href="/entrenamientos/fitness-pro"
            className={styles.card}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faFire} />
            </div>
            <h3>FITNESS Pro</h3>
            <p>
              Ideal personas que tienen experiencia en fitness, este plan mejora su rutina con entrenamiento personalizado, con objetivos más concretos.
            </p>
          </Link>

          <Link
            href="/entrenamientos/deportes-basic"
            className={styles.card}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </div>
            <h3>DEPORTE Basic</h3>
            <p>
              Diseñado para personas deportistas que no cuentan con las herramientas para poder entrenar en base a su modalidad deportiva.
            </p>
          </Link>

          <Link
            href="/entrenamientos/deportes-pro"
            className={styles.card}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faMountain} />
            </div>
            <h3>DEPORTE Pro</h3>
            <p>
              Diseñado para deportistas y/o atletas profesionales o semi profesionales que de forma individual quieran optimizar su rendimiento.
            </p>
          </Link>

        </div>
        <div className={styles.quote}>
          <div className={styles.openingQuote}>“</div>
          <p>
            Acabar agotado no es sinónimo de haber realizado un buen entrenamiento. Como experta en acondicionamiento físico debo concienciar a las personas en la importancia que tiene presentar programas elaborados desde el conocimiento teórico-práctico. Por ello apuesto por los entrenamientos seguros.
          </p>
          <div className={styles.closingQuote}>”</div>
        </div>
        <Link href="/conoceme" className={`${styles.card} ${styles.bigCard}`}>
          <h3>Conóceme </h3>
          <p>Si quieres saber más sobre mi background o quieres contactarme, haz click aquí </p>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>
          2024 © All Rights Reserved - Martina Díaz
          </p>
      </footer>
    </Layout>
  );
}


export default Home;