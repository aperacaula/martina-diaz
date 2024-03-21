import Layout from "../components/Layout/Layout";
import Image from "next/image";

import styles from "../styles/tarifas.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Conoceme: React.FC = () => {
    return (
        <Layout filledMenu={true}>
            <div className={styles.container}>
                <Image alt="Tarifas" src="/tarifas.png" width={600} height={500} priority={true} placeholder="blur" />
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

export default Conoceme;