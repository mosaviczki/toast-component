import { useEffect } from "react";
import styles from "./style.module.css";

const Dialog = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div className={styles.backgroundDialog}>
          <dialog className={styles.containerDialog} open>
            Conteudo do dialog aqui
            <button onClick={handleClose}>x</button>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Dialog;
