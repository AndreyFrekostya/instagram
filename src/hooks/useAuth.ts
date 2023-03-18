import {useAppSelector} from './hooksRedux';

export function useAuth() {
    const {email,name,nick,id} = useAppSelector(state => state.user);
    const localEmail=localStorage.getItem('email')
    if(localEmail!==null){
        return {
            isAuth: true,
            email,
            name,
            nick,
            id
        };
    }else{
        return {
            isAuth: !!email,
            email,
            name,
            nick,
            id
        }; 
    }
}