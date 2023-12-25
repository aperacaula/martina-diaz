import styles from './menu.module.scss';
import Accordion from './MenuAccordion/MenuAccordion';
import { useEffect, useState } from 'react';

const trainingOptions = [
  { label: "Basic", link: "/entrenamientos/basic" },
  { label: "Intermediate", link: "/entrenamientos/intermediate" },
  { label: "Elite", link: "/entrenamientos/elite" }]

const Menu: React.FC = () => {
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
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <section className={styles.logo}>
        <img src="/logo.png" />
      </section>
      <nav className={styles.menuItems}>
        <Accordion className={styles.menuItem} title="Entrenamientos" options={trainingOptions} />
        <div className={styles.menuItem}> Conóceme</div>
      </nav>
    </div>
  )
}

export default Menu;