import React, { useRef,useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import InputSignin from '../../../../ui/inputSign/InputSignin'
import BlueButton from '../../../../ui/bluebutton/BlueButton'
import { useAppDispatch } from '../../../../hooks/hooksRedux'
import {setUser} from '../../../../pages/signup/slices/UserSlice'
import {useAppSelector} from '../../../../hooks/hooksRedux'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Checkbox,FormControlLabel } from '@mui/material'
import ErrorValid from '../../../../ui/Error validation/ErrorValid'
import { getDocUser } from 'modules/SignInForm/helpers/getDocUser'
import { getFirestore } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'
interface ICheckInput{
    email: string,
    password: string
}
const Form = () => {  
    const [email, setEmail]=useState<string>('')
    const [password, setPassword]=useState<string>('')
    const [isRemember, setIsRemember]=useState<boolean>(false)
    const auth = getAuth();
    const db=getFirestore()
    const dispatch=useAppDispatch()
    const userSelector=useAppSelector(state=>state.user)
    const {register, formState: {errors, isValid}, handleSubmit,reset}=useForm<ICheckInput>({mode: 'onChange'})
    const onSubmit=():void=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            let userdoc=getDocUser(user.uid, db)
            userdoc.then((result)=>{
                if(result.ava!==null && result.email!==null && result.name!==null && result.nick!==null && result.id!==null){
                    dispatch(setUser({
                        email: result.email,
                        name: result.name,
                        nick: result.nick,
                        id: result.id,
                        ava: result.ava
                    }))
                    if(isRemember){
                        localStorage.setItem('email', result.email)
                        localStorage.setItem('name', result.name)
                        localStorage.setItem('nick', result.nick)
                        localStorage.setItem('id', result.id)
                        localStorage.setItem('ava', result.ava)
                    }
                }
            }
            ,(reject)=>{
                console.log(reject)
            })
        })
        .catch((error) => {
            const errorCode:string = error.code;
            const errorMessage:string = error.message;
        });
        setEmail('')
        setPassword('')
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputSignin val={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} placeholder='Электронная почта'/>
            <ErrorValid>{errors?.email &&  <p>{errors?.email?.message || 'error'}</p>}</ErrorValid>
            <InputSignin val={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}  placeholder='Пароль' type='password'/>
            <FormControlLabel control={<Checkbox onClick={()=>setIsRemember(!isRemember)} />} style={{marginTop: '10px'}} label="Запомнить меня" />
            <BlueButton disabled={!isValid}>Войти</BlueButton>
            {userSelector.id!==null && <Navigate to={'/main'}/>}
        </form>
    )
}

export default Form