import React, { useState } from 'react'
import BlueButton from 'ui/bluebutton/BlueButton'
import styles from './styles.module.css'
import { Link, Navigate } from 'react-router-dom'
const InfAboutePrivateRoute = () => {
  const [select, setSelect]=useState<string>('')
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <h1>Ooops..</h1>
        <h2>Вам следует зарегистрироваться или войти чтобы продолжить.</h2>
        <div>
          <BlueButton onClick={(e)=>setSelect('up')}>Зарегистрироваться</BlueButton>
          <BlueButton onClick={(e)=>setSelect('in')}>Войти</BlueButton>
        </div>
      </div>
      {select==='up' &&<Navigate to={'/signup'}/>}
      {select==='in' && <Navigate to={'/'}/>}
    </div>
  )
}

export default InfAboutePrivateRoute