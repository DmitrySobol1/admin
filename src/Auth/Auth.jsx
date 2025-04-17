import React, { useContext, useState } from 'react';
// import  { createContext } from 'react';
import Navigations from '../Navigations/Navigations';
import { AuthorisationContext } from '../App';





const Auth = () => {
  
const {isAuthorised, setAuthorised} = useContext(AuthorisationContext)
const [loginText,setLoginText] = useState('')
const [passwText,setPasswText] = useState('')

function loginHandler(e){
setLoginText(e.target.value)
}

function passwHandler(e){
setPasswText(e.target.value)
}

function authBtnHandler() {
  const login = String(process.env.REACT_APP_LOGIN);
  const passw = String(process.env.REACT_APP_PASSW);

  
  if (loginText.trim() === login.trim() && passwText.trim() === passw.trim()) {
    console.log('correct');
    setAuthorised(true)
  } else {
    console.log('NOT correct');
  }
}


  
  return (
    <>



      {isAuthorised ? (
        <>
          <div>auth</div>
          <Navigations />
        </>
      ) : (
        <div>
        <>
        <div>Админ панель: войдите в систему</div>
        <div>

        <input type="text" value={loginText} onChange={loginHandler} />
        </div>
        <div>

        <input type="text" value={passwText} onChange={passwHandler} />
        </div>
        <div>

        <button onClick={authBtnHandler}>Войти</button>
        </div>
        </>
          
        </div>
      )}

   
    </>
  );
};

export default Auth;
