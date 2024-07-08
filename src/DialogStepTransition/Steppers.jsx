import styles from './style.module.css'
export const Steppers = ({currentStep}) =>{
    return(
        <div className={styles.steppersContainer}>
            {currentStep.leght}
            <div className={`${styles.stepperCircle} ${styles.active}`}>
                {currentStep > 0 ? '&#10003' : '1'}
            </div>
            <div className={`${styles.stepperCircle} ${currentStep >= 1 ? styles.active : ''}`}>
            2
            </div>
        </div>
    )
}