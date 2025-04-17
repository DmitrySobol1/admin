import React, { createContext } from 'react';
import Layout from './Layout/Layout';

import Navigations from './Navigations/Navigations';
import { useState, useEffect } from 'react';

export const AuthorisationContext = createContext();



const App = () => {

    const [isAuthorised, setAuthorised] = useState(false);

  return (
    <>
      <AuthorisationContext.Provider value={{isAuthorised, setAuthorised}}>
        
        <Layout />
        {isAuthorised ? <Navigations /> : ''}
        </AuthorisationContext.Provider>
    </>
  );
};

export default App;
