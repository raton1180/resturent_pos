import Navbar from "@/components/shared/AdminPanel/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="w-full bg-white text-gray-700">
            <div className="flex">
                <div>
                    <Navbar />
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout