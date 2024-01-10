import Layout from "../components/Layout/Layout";
import Image from "next/image";

import styles from "../styles/tarifas.module.scss";

const Conoceme: React.FC = () => {
    return (
        <Layout filledMenu={true}>
            <div className={styles.container}>
                <Image alt="Tarifas" src="/tarifas.png" width={600} height={500} />
            </div>
        </Layout>
    )
}

export default Conoceme;