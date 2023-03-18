import React,{FC} from 'react'
import styles from './styles.module.css'
type Children={
    children:React.ReactNode,
    disabled?: boolean,
    onClick?: (e:React.MouseEvent<HTMLButtonElement>)=>void
}

const BlueButton:React.FC<Children> = ({children,disabled, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>{children}</button>
  )
}

export default BlueButton