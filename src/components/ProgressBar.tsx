import { useEffect, useState } from 'react'
import styles from './ProgressBar.module.css'
export const ProgressBar = ({active, tope = 15, valor = 15 }: { tope: number, valor: number, active: number }) => {
  const [pertcente, setPertcente] = useState("0%")
  useEffect(() => {
    if (active === 1) {
      setPertcente(`${(valor / tope) * 100}%`)
    } else if (active === 2) {
      setPertcente(`100%`)
    } else {
      setPertcente(`0%`)
    }
  }, [valor, tope, active])

  return (
    <>
      <span className={styles.progressbar} role="progressbar"
        aria-valuemax={tope}
        aria-valuenow={valor}
      >
        <svg width="100%" height="3">
          <rect height="10" width="100%" className={styles.bgprogress} />
          <rect height="10" width="100%" fill="#efefef" className='relleno' style={{
            transform: `scaleX(${pertcente})`,
          }} />
        </svg>
      </span>
    </>

  )
}
