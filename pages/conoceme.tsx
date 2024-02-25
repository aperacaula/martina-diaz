import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Masonry from "react-masonry-css";
import styles from "../styles/conoceme.module.scss"
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import image from "../public/profile.jpg";
import martina1 from "../public/conoceme/Martina-1.jpg";
import martina2 from "../public/conoceme/Martina-2.jpg";
import martina3 from "../public/conoceme/Martina-3.jpg";
import martina4 from "../public/conoceme/Martina-4.jpg";
import martina5 from "../public/conoceme/Martina-5.jpg";

const images = [martina1, martina3, martina2, martina4, martina5];

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Conoceme: React.FC = () => {
    return (
        <Layout filledMenu={true}>
            <Head>
                <title>Fitness Pro</title>
            </Head>
            <main className={styles.container}>
                <section className={styles.bio}>
                    <Image placeholder="blur" src={image} width={200} height={200} alt="Profile" className={styles.profile} priority={true} />
                    <p>¡Hola! Soy Martina Díaz, apasionada del deporte desde mi infancia, dónde el tenis y el skateboard marcaron mis primeros pasos. Mi experiencia abarca sports colectivos como el baloncesto o el fútbol sala, aunque actualmente mis tres pasiones son el surf, la escalada y el pádel beach.</p>
                    <p>Graduada en Ciencias de la Actividad Física y el Deporte, y cuento con un máster en Salud y Actividad Física habiéndome especializado en la prevención de lesiones. Profesionalmente, llevo más de 10 años como profesora de tenis, preparadora física y readaptadora en una de las academias de tenis de alto rendimiento más importantes de España, la Emilio Sanchez Academy.</p>
                    <p>Esta trayectoria me ha proporcionado el conocimiento necesario para diseñar tu plan de entrenamiento diseñado únicamente para ti.</p>
                    <p><strong>
                        ¡Date esta oportunidad y únete a mí en este viaje hacia la mejor versión de ti mismo!</strong></p>
                </section>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.my_masonry_grid}
                    columnClassName={styles.my_masonry_grid_column}
                >
                    {images.map((image, index) => (
                        <div style={{ width: '100%' }}>
                            <Image
                                placeholder="blur"
                                alt={`martina-${index}`}
                                src={image}
                                priority={true}
                            />
                        </div>
                    ))}
                </Masonry>
                <Link className={styles.goBack} href="/">
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faBackward} size="sm" />
                    </div>
                    Volver
                </Link>
            </main>
        </Layout>
    )
}

export default Conoceme;
