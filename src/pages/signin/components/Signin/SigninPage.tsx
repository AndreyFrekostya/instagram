import React, { useState,useEffect } from 'react'
import phones from './../../../../images/signincollect/phonephotshop.png'
import screenshot1 from './../../../../images/signincollect/screenshot1.png'
import screenshot2 from './../../../../images/signincollect/screenshot2.png'
import screenshot3 from './../../../../images/signincollect/screenshot3.png'
import screenshot4 from './../../../../images/signincollect/screenshot4.png'
import styles from'./styles.module.css'
import SignInForm from './../../../../modules/SignInForm' 
import Footer from './../Footer/Footer'
import PhoneImage from '../PhoneImage/PhoneImage'
const SigninPage = () => {
  return (
    <div className={styles.ver}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <PhoneImage/>
          <SignInForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SigninPage