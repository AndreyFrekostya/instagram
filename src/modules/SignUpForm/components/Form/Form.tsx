import React from 'react'
import InputSignin from '../../../../ui/inputSign/InputSignin'
import {useAppDispatch} from './../../../../hooks/hooksRedux'
import BlueButton from '../../../../ui/bluebutton/BlueButton'
import {Navigate  } from 'react-router-dom'
import { addFirebaseDoc } from 'modules/SignUpForm/helpers/addFirebaseDoc'
import {useAuth} from './../../../../hooks/useAuth'
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from './../../../../pages/signup/slices/UserSlice'
import { useState } from 'react';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const Form = () => {
  const [email, setEmail]=useState<string>('')
  const [password, setPassword]=useState<string>('')
  const [name, setName]=useState<string>('')
  const [nickname, setNickname]=useState<string>('')
  const [error, setError]=useState<string>('')
  const [isNav, setNav]=useState<boolean>(false)
  const {isAuth}=useAuth()
  const dispatch=useAppDispatch()
  const auth=getAuth()
  const db=getFirestore()
  const storage=getStorage()
  const Signin=(e:React.MouseEvent<HTMLButtonElement>):void=>{
    e.preventDefault()
    setNav(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const data={id: user.uid, email:email, nick: nickname, name: name, dispatch: dispatch}
      addFirebaseDoc(db,storage,data)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
      setError('Неправильная почта или пароль')
    });
    setEmail('')
    setPassword('')
    setName('')
    setNickname('')
    setError('')
  }
  return (
    <form>
        <InputSignin 
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} 
        val={email} 
        placeholder='Моб.телефон или эл.адрес'
        />
        <InputSignin 
        placeholder='Имя и фамилия'
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
        val={name}
        />
        <InputSignin placeholder='Имя пользователья'
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNickname(e.target.value)}
        val={nickname}/>
        <InputSignin placeholder='Пароль'
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
        val={password}
        />
        <h3 style={{marginTop:'10px',color: '#8e8e8e', fontSize:'15px'}}>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram</h3>
        <h3 style={{marginTop:'10px',color: '#8e8e8e', fontSize:'15px'}}>Регистрируясь, вы принимаете наши условия</h3>
        <BlueButton onClick={(e:React.MouseEvent<HTMLButtonElement>)=>Signin(e)}>Далее</BlueButton>
      {isAuth && <Navigate to={'/main'}/>}
    </form>
  )
}

export default Form