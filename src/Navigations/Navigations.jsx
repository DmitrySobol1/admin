import React from 'react';
import { useContext  } from 'react';
import { NavLink } from 'react-router';

import style from './Navigations.module.css';
import { AuthorisationContext } from '../App';


const Navigations = () => {

const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);

  return (
    <>
      <div className={style.navigations}>
        <div className={style.wrapper}>
         
          <div className={style.exitButton} onClick={() => setAuthorised(false)}>
            <div className={style.text}>Выйти</div>
          </div>

          {/* <NavLink to="/auth">
            {({ isActive }) => (
              <div className={isActive ? style.buttonActive : style.button}>
                <div className={style.text}>Выйти</div>
              </div>
            )}
          </NavLink> */}

          <NavLink to="/userlist">
            {({ isActive }) => (
              <div className={isActive ? style.buttonActive : style.button}>
                <div className={style.text}>Список</div>
              </div>
            )}
          </NavLink>

          <NavLink to="/rqst">
            {({ isActive }) => (
              <div className={isActive ? style.buttonActive : style.button}>
                <div className={style.text}>Запросы</div>
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigations;
