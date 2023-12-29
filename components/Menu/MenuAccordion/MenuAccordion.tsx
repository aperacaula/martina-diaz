import { useState } from 'react';
import styles from './accordion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface AccordionProps {
  title: string;
  options: { label: string; link: string }[];
  darkMenu?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, options, darkMenu }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <div className={`${styles.menuItem} ${isHovered ? styles.hovered : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={styles.accordionText}>
        <span className={styles.title}>{title}</span>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faChevronDown} size="sm" />
        </div>
      </div>
      {isHovered && (
        <div className={`${styles.options} ${darkMenu ? styles.darkMenu : ''}`}>
          {options.map(option => <div><Link href={option.link}>{option.label}</Link></div>)}
        </div>
      )}
    </div>
  );
};

export default Accordion;