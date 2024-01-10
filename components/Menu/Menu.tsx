import styles from './menu.module.scss';
import Accordion from './MenuAccordion/MenuAccordion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const trainingOptions = [
  { label: "Fitness Basic", link: "/entrenamientos/fitness-basic" },
  { label: "Fitness Pro", link: "/entrenamientos/fitness-pro" },
  { label: "Deportes Basic", link: "/entrenamientos/deportes-basic" },
  { label: "Deportes Pro", link: "/entrenamientos/deportes-pro" }]


interface MenuProps {
  filledMenu?: boolean;
}

const Menu: React.FC<MenuProps> = ({ filledMenu }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''} ${filledMenu ? styles.filledMenu : ''}`}>
      <Link href="/" className={styles.logo}>
        <FontAwesomeIcon icon={faDumbbell} size="3x" />
      </Link>
      <nav className={styles.menuItems}>
        <Accordion title="Entrenamientos" options={trainingOptions} filledMenu={filledMenu} />
        <div className={styles.menuItem}><Link href="/tarifas">Tarifas</Link></div>
        <div className={styles.menuItem}><Link href="/conoceme">Conóceme</Link></div>
      </nav>
    </div>
  )
}

export default Menu;