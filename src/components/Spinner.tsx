import spinner from '../assets/spinner.svg'
import styles from './Spinner.module.css'
export const Spinner = () => {
    return (
        <div className={styles.spinnercontainer}>
            <img className={styles.spinnerloading} src={spinner} />
        </div>
    )
}
