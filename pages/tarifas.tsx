import Layout from "../components/Layout/Layout";
import Image from "next/image";

import styles from "../styles/tarifas.module.scss";

const Conoceme: React.FC = () => {
    return (
        <Layout darkMenu={true}>
            <div className={styles.container}>
                <Image src="/tarifas.png" width={600} height={500} />
            </div>
        </Layout>
    )
}

export default Conoceme;