import React from 'react';
import Userlist from '../Userlist/Userlist'
import Rqstchangecoin from '../Rqstchangecoin/Rqstchangecoin'
import Auth from '../Auth/Auth'

import Navigations from '../Navigations/Navigations'

import style from './Layout.module.css'
// import Game from '../Game/Game'
// import Referal from '../Referal/Referal'
// import Exchange from '../Exchange/Exchange'
// import Adminpage from '../AdminPages/Adminpage'
import { Routes, Route, Router } from "react-router";

const Layout = () => {

return (
<>
<div className={style.layout}>

   <Routes>
            
            <Route path="/auth" element={<Auth />} />
            <Route path="/adminpage/userlist" element={<Userlist />} />
            <Route path="/adminpage/rqst" element={<Rqstchangecoin />} />
            
    </Routes>



</div>
</>
)

}

export default Layout;