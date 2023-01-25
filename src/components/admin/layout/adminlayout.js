import { Outlet } from "react-router-dom";
import { AdminFooter } from "../footer/footer";
import { AdminHeader } from "../header/header";
import { AdminSidebar } from "../sidebar/sidebar";

export function AdminLayout(){

    return(
        <div className="flex ">
            <div>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="flex flex-col h-screen">
                {/* <AdminHeader></AdminHeader>
                    <Outlet></Outlet>
                <AdminFooter></AdminFooter> */}
            </div>
        </div>
    )
}