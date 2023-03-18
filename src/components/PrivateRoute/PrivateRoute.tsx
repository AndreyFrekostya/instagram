import { useAuth } from 'hooks/useAuth'
import React, {FC,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
interface IprivateRoute{
    children: React.ReactNode,
}
const PrivateRoute: React.FC<IprivateRoute> = ({children}) => {
  const {isAuth}=useAuth()
  return (
    <div>{isAuth ? (children) : (<Navigate to='/infprivatepage'/>)}</div>
  )
}

export default PrivateRoute