import styles from './menu.module.scss';
import Accordion from './MenuAccordion/MenuAccordion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const trainingOptions = [
  { label: "Fitness Basic", link: "/entrenamientos/fitness-basic" },
  { label: "Fitness Pro", link: "/entrenamientos/fitness-pro" },
  { label: "Deportes Basic", link: "/entrenamientos/deportes-basic" },
  { label: "Deportes Pro", link: "/entrenamientos/deportes-pro" }]

const Menu: React.FC = ({ darkMenu }) => {
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
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''} ${darkMenu ? styles.darkMenu : ''}`}>
      <section className={styles.logo}>
        <img src="/logo.png" />
      </section>
      <nav className={styles.menuItems}>
        <Accordion className={styles.menuItem} title="Entrenamientos" options={trainingOptions} darkMenu={darkMenu} />
        <div className={styles.menuItem}><Link href="/conoceme">Conóceme</Link></div>
      </nav>
    </div>
  )
}

export default Menu;