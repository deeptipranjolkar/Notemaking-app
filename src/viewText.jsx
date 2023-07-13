import React from 'react';
import styles from "./viewText.module.css";
import imgbg from "./assets/image_removebg_preview_1.png";
import lock from "./assets/lock.svg";


function viewText({isVisible}) {
  return (
    <div className={`${styles.right} ${isVisible ? "" : styles.invisible}`}>
      <img src={imgbg} alt="sample" className={styles.bg_img} />
      <p className={styles.heading}>Pocket Notes</p>

      <div className={styles.paragraph_wrap}>
        <p className={styles.paragraph1}> </p>
        Send and receive messages without keeping your phone online.
        <p className={styles.paragraph2}>
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <div className={styles.lock_wrap}> 
        <img src={lock} alt="lock"  className={styles.lock_picture}/>
        <p className={styles.lock_message}>end-to-end encrypted</p>
      </div>
    </div>
  );
}

export default viewText;