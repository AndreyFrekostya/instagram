import React from 'react'
import styles from './styles.module.css'
import logo from './../../../../images/logo.svg'
import InputSignin from '../../../../ui/inputSign/InputSignin'
import BlueButton from '../../../../ui/bluebutton/BlueButton'
import Facebook from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import Footer from 'pages/signin/components/Footer/Footer'
export const SignUpForm = () => {
  return (
    <>
      <div className={styles.box}> 
        <img src={logo} alt="" />
        <h2 style={{fontWeight: '600', fontSize: '20px', color: '#8f8f8f'}}>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей</h2>
        <BlueButton><Facebook/>Войти через Facebook</BlueButton>
        <h2 className={styles.hror}><span>ИЛИ</span></h2>
        <Form/>
      </div>
      <div className={styles.box_two}>
        <h3>Есть аккаунт? <Link to={'/'}>Вход</Link></h3>
      </div>
      <Footer/>
    </>
  )
}