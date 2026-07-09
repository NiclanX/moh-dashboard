import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";




function MainLayout() {


    return (
        <div className="app-layout">
            <SideBar />
            <main className="main-content">
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout;