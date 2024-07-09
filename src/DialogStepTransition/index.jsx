import { useState, useEffect } from "react";
import { StepOne } from "../Steps";
import { StepTwo } from "../Steps";
import styles from "./style.module.css";
import { Steppers } from "./Steppers";

const DialogStep = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  /* const [steps, setSteps] = useState([1, 2]); */

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

  const handleTransition = (newStep) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setIsTransitioning(false);
    }, 300); // Tempo da transição em ms, deve ser igual ao definido no CSS
  };

  /* 
    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleFinish = () => {
        // Pode adicionar lógica adicional aqui para finalizar o modal ou fazer outras ações
        handleClose();
    };
     */

  return (
    <>
      {open && (
        <div className={styles.backgroundDialog}>
          <div className={styles.containerDialog}>
            <button onClick={handleClose}>x</button>
            <Steppers currentStep={step} />
            <div className={styles.stepContainer}>
              <div
                className={`${styles.step} ${
                  step === 0 && !isTransitioning ? styles["step-active"] : ""
                } ${step === 0 && isTransitioning ? styles["step-exit"] : ""}`}
              >
                <StepOne />
              </div>
              <div
                className={`${styles.step} ${
                  step === 1 && !isTransitioning ? styles["step-active"] : ""
                } ${step === 1 && isTransitioning ? styles["step-exit"] : ""}`}
              >
                <StepTwo />
              </div>
            </div>
            <button onClick={() => handleTransition(step === 0 ? 1 : 0)}>
              {step === 0 ? "Next" : "Back"}
            </button>
            {/* {currentStep === steps.length - 1 ? (
                                <button onClick={handleFinish}>Finish</button>
                            ) : (
                                <button onClick={handleNextStep}>Next</button>
                            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default DialogStep;
