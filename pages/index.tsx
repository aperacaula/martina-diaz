import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireFlameSimple, faFireFlameCurved, faMountain, faCopyright, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import whatsapp from '../public/icons/icons8-whatsapp-color.svg';
import { useState, useEffect } from 'react';
import image from "../public/background.png";

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
            src={image}
            alt="Background Image"
            fill
            className={styles.image}
            priority={true}
            placeholder="blur"
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
          {/* <p className={styles.description}>
            Cada persona es única y por ello necesita una rutina personalizada <br />
            adaptada 100% a sus necesidades, capacidades y aptitudes.
          </p> */}
          <p className={styles.description}>
            ¿Piensas que un entrenador personal está fuera de tu alcance?
          <br /> Descubre cómo mis servicios online
                    hacen que la calidad sea accesible para todas las personas.
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
            href="/entrenamientos/sports-basic"
            className={`${styles.card} ${styles.sportsCard}`}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </div>
            <h3 className={styles.sportsCard}>SPORTS Basic</h3>
            <p>
              Diseñado para personas deportistas que no cuentan con las herramientas para poder entrenar en base a su modalidad deportiva.
            </p>
          </Link>

          <Link
            href="/entrenamientos/sports-pro"
            className={`${styles.card} ${styles.sportsCard}`}
          >
            <div className={styles.trainingIcon}>
              <FontAwesomeIcon icon={faMountain} />
            </div>
            <h3>SPORTS Pro</h3>
            <p>
              Diseñado para deportistas y/o atletas profesionales o semi profesionales que de forma individual quieran optimizar su rendimiento.
            </p>
          </Link>

        </section>
        <section className={styles.stepsContainer}>
          <h2>Obtén tu rutina personalizada en 4 simples pasos:</h2>
          <div className={styles.steps}>
            <p><strong>PASO 1</strong>: <span className={styles.highlighted}>ENCUESTA INICIAL</span> (sobre el estilo de vida, historial y objetivos).</p>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faArrowDown} size="sm" />
            </div>
            <p><strong>PASO 2</strong>: <span className={styles.highlighted}>CONTACTO CLIENTE</span> (para profundizar y aclarar detalles como horarios, gustos, preferencias…).</p>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faArrowDown} size="sm" />
            </div>
            <p><strong>PASO 3</strong>: <span className={styles.highlighted}>VALORACIÓN INICIAL</span> (a través de test de calidad de movimiento, y musculatura estabilizadora; control composición corporal mediante perímetros antropométricos).</p>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faArrowDown} size="sm" />
            </div>
            <p><strong>PASO 4</strong>: <span className={styles.highlighted}>ELABORACIÓN Y ENTREGA</span> (en 2-3 días de tu rutina personalizada).</p>
          </div>
        </section>
        <hr className={styles.separator} />
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