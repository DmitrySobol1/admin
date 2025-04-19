import React, { useContext, useState } from 'react';
// import  { createContext } from 'react';
import Navigations from '../Navigations/Navigations';
import { AuthorisationContext } from '../App';
import styles from './Auth.module.css';

const Auth = () => {
  const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);
  const [loginText, setLoginText] = useState('');
  const [passwText, setPasswText] = useState('');
  const [isShowNotCorrect,setShowNotCorrect] = useState(false)

  function loginHandler(e) {
    setLoginText(e.target.value);
    setShowNotCorrect(false);
  }

  function passwHandler(e) {
    setPasswText(e.target.value);
    setShowNotCorrect(false);
  }

  function authBtnHandler() {
    const login = String(process.env.REACT_APP_LOGIN);
    const passw = String(process.env.REACT_APP_PASSW);

    if (
      loginText.trim() === login.trim() &&
      passwText.trim() === passw.trim()
    ) {
      console.log('correct');
      setLoginText('')
      setPasswText('')
      setAuthorised(true);
    } else {
      console.log('NOT correct');
      setShowNotCorrect(true)
      setLoginText('')
      setPasswText('')

    }
  }

  return (
    <>
      {isAuthorised ? (
        <>
          <div className={styles.successDiv}>Вы авторизованы</div>
          <Navigations />
        </>
      ) : (
        <div className={styles.container}>
          <>
            <div className={styles.admintitle}>Админ панель</div>
            <div>
              <input
                type="text"
                value={loginText}
                onChange={loginHandler}
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="text"
                value={passwText}
                onChange={passwHandler}
                className={styles.input}
              />
            </div>
            <div>
              <button onClick={authBtnHandler} className={styles.btn}>Войти</button>
            </div>
            {isShowNotCorrect && <span className={styles.notCorrect}>не верно</span>}
          </>
        </div>
      )}
    </>
  );
};

export default Auth;
