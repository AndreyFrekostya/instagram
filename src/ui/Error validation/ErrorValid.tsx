import React, {FC} from 'react'
import styles from './styles.module.css'
interface Ierror{
  children: React.ReactNode,
}
const ErrorValid:React.FC<Ierror> = ({children}) => {
  return (
    <div className={styles.error}>{children}</div>
  )
}

export default ErrorValid