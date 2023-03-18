import React from 'react'
import styles from './styles.module.css'
import logo from './../../images/logo_on_black.svg'
import InputSearch from 'ui/inputForSearch/InputSearch'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const HeaderMobileVersion = () => {
  return (
    <div className={styles.wrap}>
        <img src={logo} alt="logo" />
        <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'flex-end'}}>
            <InputSearch/>
            {/* <AddCircleOutlineOutlinedIcon/> */}
            <FavoriteBorderOutlinedIcon/>
        </div>
    </div>
  )
}

export default HeaderMobileVersion