import React, { useState, FC, useEffect} from 'react'
import styles from './styles.module.css'
interface Ip{
  placeholder:string,
  type?: string,
  val:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}
const InputSignin:React.FC<Ip> = ({placeholder, type='text', onChange,val}) => {
  const [types, setType]=useState<boolean>(false)
  const showUp=()=>{
    if(val.length!==0){
      setType(!types)
    }
    else{
      setType(false)
    }
  }  
  useEffect(() => {
    if(type==='text' ){
      setType(true)
    }
  }, [])
  
  return (
    <div className={styles.wrap}>
      <input onChange={onChange} value={val} className={styles.input} type={types ? 'text': 'password'} placeholder={placeholder}></input>
      {type==='password' ? (<div className={styles.show} onClick={showUp}>Показать</div>) : (null)}
    </div>
  )
}

export default InputSignin