import React, { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from '../Header/Header';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.generalContainer}>
      <Header />
      <Header phantomElement />
      <main className={styles.layoutContainer}>{children}</main>
    </div>
  );
};

export default Layout;
