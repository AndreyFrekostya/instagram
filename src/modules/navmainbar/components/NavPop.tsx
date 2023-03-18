import React from 'react'
import styles from './styles2.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { getAuth, signOut } from "firebase/auth";
import { useAppDispatch } from 'hooks/hooksRedux';
import { setUser } from 'pages/signup/slices/UserSlice';
import { Link } from 'react-router-dom';
const NavPop = () => {
    const auth = getAuth();
    const dispatch=useAppDispatch()
    const Handler=()=>{
        signOut(auth).then(() => {
            localStorage.clear()
            dispatch(setUser({
                email: null,
                nick:null,
                id: null,
                name: null,
                ava: null
            }))
            console.log( auth.currentUser)
        }).catch((error) => {
            console.log(error.message)
        });
    }
  return (
    <div className={styles.wrap}>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Настройки</h2>
            </div>
            <SettingsIcon/>
        </div>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Ваши действия</h2>
            </div>
            <BrowseGalleryIcon/>
        </div>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Сохраненное</h2>
            </div>
            <BookmarksIcon/>
        </div>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Переключить тему</h2>
            </div>
            <NightlightRoundIcon/>
        </div>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Сообщения о проблеме</h2>
            </div>
            <ErrorOutlineIcon/>
        </div>
        <div className={styles.item}>
            <div className={styles.fornowrap}>
                <h2>Переключение между аккаунтами</h2>
            </div>
        </div>
        <div className={styles.item} onClick={Handler}>
            <div className={styles.fornowrap}>
                <Link to={'/'}><h2>Выйти</h2></Link>
            </div>
        </div>
    </div>
  )
}

export default NavPop