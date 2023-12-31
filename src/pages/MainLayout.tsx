import TableDetails from "@/components/custom/TableDetails"
import Header from "@/components/shared/Header"
import Watch from "@/components/shared/Watch"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="bg-[#040410]">
            <Watch />
            <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 md:col-span-8 h-screen custom-scrollbar">
                    <Header />
                    <Outlet />
                </div>
                <div className="col-span-12 md:col-span-4 border-2 border-black">
                    <h2><TableDetails/></h2>
                </div>
            </div>
        </div>
    )
}

export default MainLayout