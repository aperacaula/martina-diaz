import styles from './layout.module.scss';
import Menu from '../Menu/Menu';

interface LayoutProps {
    darkMenu?: boolean;
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMenu = false }) => {
    return (
        <div className={styles.globalContainer}>
            <Menu darkMenu={darkMenu} />
            {children}
        </div>
    );
}

export default Layout;