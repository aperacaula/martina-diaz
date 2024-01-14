import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireFlameSimple, faFireFlameCurved, faMountain, faCopyright } from '@fortawesome/free-solid-svg-icons';
import whatsapp from '../public/icons/icons8-whatsapp-color.svg';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setReachedEnd(isAtEnd);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Martina Díaz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Entrenadora personal de fitness y deporte con planes de entrenamiento 100% online."
        />
        <meta
          property="og:description"
          content="Entrenos personales online"
        />
        <meta
          property="og:image"
          content="https://martinadiaz.es/_next/image?url=%2Fprofile.png&w=640&q=75"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.backgroundImage}>
          <Image
            src="/background.jpg"
            alt="Background Image"
            fill
            className={styles.image}
            priority={true}
          />
        </section>
        <section className={styles.intro}>
          <h1 className={styles.title}>
            Martina Díaz
          </h1>
          <h2 className={styles.subtitle}>
            ENTRENAMIENTOS PERSONALES
            <span className={styles.highlighted}> ONLINE</span>
          </h2>
          <p className={styles.description}>
            Cada persona es única y por ello necesita una rutina personalizada <br />
            adaptada 100% a sus necesidades, capacidades y aptitudes.
          </p>
        </section>

        <section className={styles.grid}>
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
            className={`${styles.card} ${styles.deportesCard}`}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </div>
            <h3 className={styles.deportesCard}>DEPORTE Basic</h3>
            <p>
              Diseñado para personas deportistas que no cuentan con las herramientas para poder entrenar en base a su modalidad deportiva.
            </p>
          </Link>

          <Link
            href="/entrenamientos/deportes-pro"
            className={`${styles.card} ${styles.deportesCard}`}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faMountain} />
            </div>
            <h3>DEPORTE Pro</h3>
            <p>
              Diseñado para deportistas y/o atletas profesionales o semi profesionales que de forma individual quieran optimizar su rendimiento.
            </p>
          </Link>

        </section>
        <section className={styles.quote}>
          <div className={styles.openingQuote}>“</div>
          <p>
            Acabar agotado no es sinónimo de haber realizado un buen entrenamiento. Como experta en acondicionamiento físico debo concienciar a las personas en la importancia que tiene presentar programas elaborados desde el conocimiento teórico-práctico. Por ello apuesto por los entrenamientos seguros.
          </p>
          <div className={styles.closingQuote}>”</div>
        </section>
      </main>
      <a href="https://wa.me/34695442276" className={`${styles.whatsappSticky} ${reachedEnd ? styles.hidden : ''}`}>
        <Image alt="Whatsapp-sticky" width={40} height={40} src={whatsapp} />
      </a>
    </Layout>
  );
}


export default Home;