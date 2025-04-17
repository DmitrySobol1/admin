import React from 'react';
import { NavLink } from 'react-router';
import style from './Navigations.module.css';

const Navigations = () => {
  return (
    <>
      <div className={style.navigations}>
        <div className={style.wrapper}>
          
         
          <NavLink to="/auth">
            {({ isActive }) => (
              <div className={isActive ? style.buttonActive : style.button}>
                <div className={style.text}>Главная</div>
              </div>
            )}
          </NavLink>

          
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
