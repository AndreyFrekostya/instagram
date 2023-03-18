import React,{useEffect} from 'react';
import SigninPage from './pages/signin/components/Signin/SigninPage'
import SignupPage from './pages/signup/components/Signup/SignupPage'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MainPage from 'pages/MainPage/components/MainPage';
import {ROUTES} from './pages/MainPage/consts/RoutesMain'
import InfAboutePrivateRoute from 'pages/InfAboutPrivateRoute/components/InfAboutePrivateRoute';
import { useAppDispatch, useAppSelector } from 'hooks/hooksRedux';
import { getAuth } from 'firebase/auth';
import { setUser } from 'pages/signup/slices/UserSlice';
import { getDocUser } from 'modules/SignInForm/helpers/getDocUser';
import { getFirestore } from 'firebase/firestore';
import MainCourse from 'pages/MainCourse/components/MainCourse';
function App() {
  const dispatch=useAppDispatch()
  const db=getFirestore()
  useEffect(() => {
    let email=localStorage.getItem('email')
    let name=localStorage.getItem('name')
    let nick=localStorage.getItem('nick')
    let ava=localStorage.getItem('ava')
    let id=localStorage.getItem('id')
    if(email!==null && name!==null && nick!==null && ava!==null && id!==null){
      dispatch(setUser({
        email: email,
        name: name,
        nick: nick,
        ava: ava,
        id: id,
      }))
    }
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SigninPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/main' element={<PrivateRoute><MainPage/></PrivateRoute>}>
          <Route path={ROUTES.home} element={<PrivateRoute><MainCourse/></PrivateRoute>}/>
          <Route path={ROUTES.explore}  element={<PrivateRoute><MainCourse/></PrivateRoute>}/>
          <Route path={ROUTES.direct}  element={<PrivateRoute><MainCourse/></PrivateRoute>}/>
          <Route path={ROUTES.profile}  element={<PrivateRoute><MainCourse/></PrivateRoute>}/>
          <Route path={ROUTES.reels}  element={<PrivateRoute><MainCourse/></PrivateRoute>}/>
        </Route>
        <Route path='/infprivatepage' element={<InfAboutePrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
