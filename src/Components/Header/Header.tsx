import React from 'react';
import styles from './header.module.scss';

interface HeaderProps {
  phantomElement?: boolean;
}

const Header: React.FC<HeaderProps> = ({ phantomElement }) => {
  return (
    <div
      className={
        phantomElement ? styles.phantomContainer : styles.headerContainer
      }
    >
      <div className={styles.textContainer}>Header</div>
    </div>
  );
};

export default Header;
