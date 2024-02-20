import React from 'react';
import styles from './Banner.module.css'; 
import bannerImage from '../../../assets/images/banner.jpeg'


function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.textContent}>
        <div className={styles.title}>TANGOSEED</div>
        <div className={styles.caption}>Transform Predict Enpower</div>
      </div>
      <div className={styles.imageContainer}>
        <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      </div>
    </div>
  );
}

export default Banner;
