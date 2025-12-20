import 'react'
import { useLocation, Outlet } from "react-router-dom";
import SidePanel from "../Static/SidePanel";
import '../Static/SideIcons';

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