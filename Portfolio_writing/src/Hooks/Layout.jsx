import React from 'react'
import { useLocation, Outlet } from "react-router-dom";
import SidePanel from "../Static/SidePanel";
import SideIcons from '../Static/SideIcons';

const LayoutSpecification = () =>{
    const location = useLocation;
    const isHomePage = location.pathname === '/';

    return(
        <div>
            {!isHomePage && <SidePanel/>}

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default LayoutSpecification;