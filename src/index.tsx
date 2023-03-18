import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { initializeApp } from "firebase/app";
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'; 
import {store} from './store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);

const firebaseConfig = {
    apiKey: "AIzaSyBLPHxgXqkphrWW8dagu3G87urXxBvhCyw",
    authDomain: "instagram-735a3.firebaseapp.com",
    projectId: "instagram-735a3",
    storageBucket: "instagram-735a3.appspot.com",
    messagingSenderId: "271070392966",
    appId: "1:271070392966:web:4d39f528bd27e67f795707",
  };
  
export const app = initializeApp(firebaseConfig)

