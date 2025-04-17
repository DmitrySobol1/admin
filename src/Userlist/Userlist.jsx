import React from 'react';
import { useContext, useState } from 'react';
import Navigations from '../Navigations/Navigations';
import { AuthorisationContext } from '../App';

const Userlist = () => {
  const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);

  return (
    <>
      {isAuthorised ? (
        <>
          <div>list</div>
          
        </>
      ) : (
        <div>not auth</div>
      )}
    </>
  );
};

export default Userlist;
