import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="w-full text-white md:flex py-3 justify-between border-b-[2px] border-black">
            <div className="flex flex-row md:flex-col my-5 md:my-0 items-center mx-5">
                <div className="flex items-center gap-3">
                    <FaArrowLeft />
                    <h2 className="font-semibold">Table</h2>
                </div>
                <p className="ml-10">16 tables</p>
            </div>
            <div className="flex mx-5 items-center gap-3">
                <Button className="bg-transparent border-gray-600 border px-10">Customers</Button>
                <Link to={'/current-order'}><Button className="bg-transparent border-gray-600 border px-10">Orders</Button></Link>
            </div>
        </nav>
    )
}

export default Header