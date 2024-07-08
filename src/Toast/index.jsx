import React, { useState, useEffect } from "react";
import styles from "./style.module.css"; 
import CloseIcon from "./close-icon.svg";

const Toast = ({ message, show, duration }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.toast} ${visible ? styles.show : ''}`}>
      <div className={styles.leftPart}>
          <img src={CloseIcon} alt="icon-close" />
          <p>{message}</p>
        </div>
        <div className={styles.ActionClose}>
          <button onClick={handleClose}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
