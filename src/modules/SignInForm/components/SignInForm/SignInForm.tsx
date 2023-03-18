import React from 'react'
import logo from './../../../../images/logo.svg'
import styles from './styles.module.css'
import Facebook from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
export const SignInForm = () => {
  return (
    <div>
      <div className={styles.box}>
      <img src={logo} alt="" />
      <Form/>
      <h2><span>ИЛИ</span></h2>
      <div className={styles.facebook}>
        <Facebook />
        <h3>Войти через Facebook</h3>
      </div>
      <a style={{cursor: 'pointer', textDecoration:'underline'}}>Забыли пароль?</a>
    </div>
      <div className={styles.box} style={{marginTop: '20px', paddingTop: '20px'}}>
        <h1>У вас еще нет аккаунта? <Link to='/signup' className={styles.signuptext}>Зарегистрироваться</Link></h1>
      </div>
    </div>
  )
}
