import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css'
const InputSearch = () => {
    const [value, setValue] = useState<string>('')
  return (
    <div className={styles.wrap}>
        <SearchIcon/>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Поиск'/>
    </div>
  )
}

export default InputSearch