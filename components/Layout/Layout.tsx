import styles from './layout.module.scss';
import Menu from '../Menu/Menu';
import whatsapp from "../../public/icons/icons8-whatsapp.svg";
import instagram from "../../public/icons/icons8-instagram.svg";
import Image from 'next/image';

interface LayoutProps {
    filledMenu?: boolean;
    children: JSX.Element | JSX.Element[];
    seoTitle?: string;
    seoDescription?: string;
}

const Layout: React.FC<LayoutProps> = (
    { children, filledMenu = false }
) => {
    return (
        <div className={styles.globalContainer}>
            <Menu filledMenu={filledMenu} />
            {children}
            <footer className={styles.footer}>
                <div className={styles.contact}>
                    <a href="https://wa.me/34695442276"><Image alt="Whatsapp" src={whatsapp} width={30} height={30} /></a>
                    <a href="https://www.instagram.com/martinadiaz.es/"><Image alt="Instagram" src={instagram} width={30} height={30} /></a>
                </div>
                <p>
                    2024 © All Rights Reserved - Martina Díaz
                </p>
            </footer>
        </div>
    );
}

export default Layout;