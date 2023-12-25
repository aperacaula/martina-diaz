import styles from './layout.module.scss';
import Menu from '../Menu/Menu';

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.globalContainer}>
            <Menu />
            {children}
        </div>
    );
}

export default Layout;