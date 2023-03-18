import React,{useState,useEffect} from 'react'
import phones from './../../../../images/signincollect/phonephotshop.png'
import screenshot1 from './../../../../images/signincollect/screenshot1.png'
import screenshot2 from './../../../../images/signincollect/screenshot2.png'
import screenshot3 from './../../../../images/signincollect/screenshot3.png'
import screenshot4 from './../../../../images/signincollect/screenshot4.png'
import styles from './styles.module.css'
const PhoneImage = () => {
    const [timer, setTimer]=useState<number>(1)
    const arr=[screenshot1, screenshot2, screenshot3, screenshot4]
    const [nowScreen, setNowScreen]=useState(screenshot1)
  const funcsetTimeAndImage=()=>{
    if(timer==4){
      setTimer(1)
      setNowScreen(screenshot1)
    }else{
      setTimer(timer+1)
      setNowScreen(arr[timer])
    }
  }
  useEffect(() => {
    const interval=setInterval(funcsetTimeAndImage, 5000)
    return ()=>clearInterval(interval)
  }, [timer])
  return (
    <div style={{position: 'relative'}} className={styles.wrap}>
        <img src={phones} style={{width: '487', height: '731'}} alt="" />
        <img className={styles.screens} src={nowScreen} alt="" /> 
    </div>
  )
}

export default PhoneImage