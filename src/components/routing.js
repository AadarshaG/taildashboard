import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminContent } from "./admin/content/content";
import { AdminLayout } from "./admin/layout/adminlayout";


export function AppRouting(){

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AdminLayout />}>
                        <Route index element={<AdminContent />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}