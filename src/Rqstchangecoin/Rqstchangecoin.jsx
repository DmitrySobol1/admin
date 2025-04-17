import React from 'react';
import Navigations from '../Navigations/Navigations'
import { AuthorisationContext } from '../App';
import { useContext, useState } from 'react';




 
 const Rqstchangecoin = () => {

    const { isAuthorised, setAuthorised } = useContext(AuthorisationContext);

    return ( 
        <>
        {isAuthorised ? (
          <>
            <div>rqst</div>
            
          </>
        ) : (
          <div>not auth</div>
        )}
      </>
            

    )
 }

 export default Rqstchangecoin;