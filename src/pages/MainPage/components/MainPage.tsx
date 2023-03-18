import HeaderMobileVersion from 'components/HeaderMob/HeaderMobileVersion'
import { Navbar } from 'modules/navmainbar/components/Navbar'
import React, { FC } from 'react'
import styles from './styles.module.css'
const MainPage: React.FC = () => {
  return (
    <div className={styles.wrap}>
      {window.innerWidth<770 ? (
        <HeaderMobileVersion/>
      ) : (null)}
      <Navbar/>
    </div>
  )
}

export default MainPage