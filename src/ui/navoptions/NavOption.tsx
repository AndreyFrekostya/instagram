import React, {FC,useEffect,useState } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'hooks/hooksRedux'
interface InavOpt{
    children: React.ReactNode,
    title?: string,
    onClick?:()=>void | undefined,
    style?: {marginTop:string} | {marginBottom: string},
    to: null | string
}
type StylesT={backgroundColor: string, fontWeight: string, border: string}
const NavOption:React.FC<InavOpt>= ({children, title, onClick, style, to}) => {
  const option=useAppSelector(state=>state.navbar)
  const styleObj:StylesT={
    backgroundColor: option==title ? '#1c1c1cae' : '',
    fontWeight: option==title ? '650' : '', 
    border: option=='Поисковый запрос'  && title=='Поисковый запрос' || title=='Уведомление' && option=='Уведомление' ? '1px solid #fff' : ''
  }
  return (
    <>
      {to!==null ? (
        <Link to={to}>
          <div onClick={onClick} className={styles.wrap} style={styleObj}>
            {children}
            <h2>{title}</h2>
          </div>
        </Link>
      ) : (
        <div onClick={onClick} style={option!==undefined ? styleObj : {}} className={styles.wrap} >
          {children}
          <h2>{title}</h2>
        </div>
      )}
    </>
  )
}

export default NavOption