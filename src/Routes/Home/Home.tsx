import React from 'react';
import Layout from '../../Components/Layout/Layout';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.homeContainer}>Home MI casa</div>
    </Layout>
  );
};

export default Home;
