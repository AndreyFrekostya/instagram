import React,{FC} from 'react'
import styles from './styles.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
type Iburger={
  isActive: boolean
}
const Burger:React.FC<Iburger> = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <MenuOpenIcon style={{height: '30px', width: '30px'}}/>
      ) : (
        <MenuIcon style={{height: '30px', width: '30px'}}/>
      )}
     </>
  )
}

export default Burger