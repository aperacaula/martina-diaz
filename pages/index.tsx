import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';

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
            No pain no gain. Sweat is fat crying.<br />
            You are a legend. Never change.
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/entrenamientos/basic" className={styles.card}>
            <h3>Basic &rarr;</h3>
            <p>
              Entrenamiento Básico. Entrenamiento Básico. Entrenamiento Básico
              Entrenamiento Básico. Entrenamiento Básico. Entrenamiento Básico
            </p>
          </Link>

          <Link
            href="/entrenamientos/intermediate"
            className={styles.card}
          >
            <h3>Intermediate &rarr;</h3>
            <p>
              Entrenamiento Intermedio. Entrenamiento Intermedio. Entrenamiento Intermedio.
              Entrenamiento Intermedio. Entrenamiento Intermedio. Entrenamiento Intermedio.
            </p>
          </Link>

          <Link
            href="/entrenamientos/elite"
            className={styles.card}
          >
            <h3>Elite &rarr;</h3>
            <p>
              Entrenamiento Pro. Entrenamiento Pro. Entrenamiento Pro.
              Entrenamiento Pro. Entrenamiento Pro. Entrenamiento Pro.
            </p>
          </Link>

        </div>
        <Link href="/conoceme" className={`${styles.card} ${styles.bigCard}`}>
          <h3>Conóceme &rarr;</h3>
          <p>Si quieres saber más sobre mi background o quieres contactarme, haz click aquí </p>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>
          2024 - Martina Díaz
          </p>
      </footer>
    </Layout>
  );
}


export default Home;