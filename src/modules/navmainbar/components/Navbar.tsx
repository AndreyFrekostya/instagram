import React,{useEffect, useState, useRef} from 'react'
import NavOption from 'ui/navoptions/NavOption'
import styles from './styles.module.css'
import {changeOption} from './../../../pages/MainPage/slices/NavBarSlice'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useAppDispatch, useAppSelector } from 'hooks/hooksRedux';
import  logo from './../../../images/logo_on_black.svg'
import Burger from 'ui/burgerMenu/Burger';
import NavPop from './NavPop';
import {ROUTES} from './../../../pages/MainPage/consts/RoutesMain'
import { Link, NavLink } from 'react-router-dom';
type ECustom=React.MouseEvent<HTMLDivElement>
export const Navbar:React.FC = () => {
  const user=useAppSelector(state=>state.user)
  const dispatch=useAppDispatch()
  const [burgerIsActive, setBurgerIsActive]=useState<boolean>(false)
  const option=useAppSelector(state=>state.navbar)
  const setOption=(state:string):void=>{
    dispatch(changeOption(state))
  }
  return (
    <div className={styles.wrap}>
      <div className={option=='Поисковый запрос' || option =='Уведомление' ? styles.otherActive : styles.other}>
          <div className={styles.firstlink}>
            <NavOption title='' to={ROUTES.home}  onClick={()=>setOption('Главная')} style={{marginBottom: '20px'}}><InstagramIcon/></NavOption>
          </div>
          <Link to={ROUTES.home} className={styles.logoActiveMenu} onClick={()=>dispatch(changeOption('Главная'))}><img  className={styles.logo} src={logo} alt='logo'/></Link>
          <NavOption  onClick={()=>setOption('Главная')} to={ROUTES.home} title='Главная'><HomeOutlinedIcon/></NavOption>
          <NavOption  onClick={()=>setOption('Поисковый запрос')} to={null}  title='Поисковый запрос'><SearchOutlinedIcon/></NavOption>
          <NavOption to={ROUTES.explore} onClick={()=>setOption('Интересное')}  title='Интересное'><ExploreOutlinedIcon/></NavOption>
          <NavOption onClick={()=>setOption('Reels')} to={ROUTES.reels} title='Reels'><MovieOutlinedIcon/></NavOption>
          <NavOption  onClick={()=>setOption('Сообщение') } to={ROUTES.direct} title='Сообщение'><ModeCommentOutlinedIcon/></NavOption>
          <NavOption  onClick={()=>setOption('Уведомление', )} to={null} title='Уведомление'><FavoriteBorderOutlinedIcon/></NavOption>
          <NavOption  onClick={()=>setOption('Создать')}  to={null}  title='Создать'><AddBoxOutlinedIcon/></NavOption>
          <NavOption  onClick={()=>setOption('Профиль')} to={ROUTES.profile} title='Профиль'>{user.ava!==null ?(<img style={{width:'30px', height:'30px', borderRadius: '50%'}} src={user.ava} alt="" />) : (null)}</NavOption>
      </div>
      <div className={styles.burger}>
        {burgerIsActive ? (
          <NavPop/>
        ) : (null)}
        <NavOption onClick={()=>setBurgerIsActive(!burgerIsActive)}  to={null}  style={{marginTop: '155px'}}>
          <Burger isActive={burgerIsActive}/>
          <h2 style={{display: option=='Поисковый запрос' || option =='Уведомление' ? 'none' : ''}}>Ёще</h2>
        </NavOption>
      </div>
    </div>
  )
}
