import { Button } from '@/components/ui/button';
import logo from '../../../assets/images/pos_logo.jpg';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaUser } from "react-icons/fa";
import { FaCartArrowDown, FaUsers } from "react-icons/fa6";
import { GiFullMetalBucket } from "react-icons/gi";
import { TbReport } from "react-icons/tb";


const Navbar = () => {
    return (
        <nav className="left_sidebar border">
            <div className='flex justify-center mt-5 mb-3'>
                <img src={logo} className='w-[150px] h-[100px]' alt="Logo" />
            </div>
            <hr />
            <div className='my-5 flex flex-col gap-5 mt-5'>
                <Link to='/dashboard' >
                    <Button className='dashboard_btn'>
                        <FaHome size={20} />
                        Dashboard
                    </Button>
                </Link>
                <Link to='/dashboard/hrm' >
                    <Button className='dashboard_btn'>
                        <FaUser size={20} />
                        HRM
                    </Button>
                </Link>
                <Link to='/dashboard/customers' >
                    <Button className='dashboard_btn'>
                        <FaUsers size={20} />
                        Customers
                    </Button>
                </Link>
                <Link to='/dashboard/products' >
                    <Button className='dashboard_btn'>
                        <FaList size={20} />
                        Products
                    </Button>
                </Link>
                <Link to='/dashboard/orders' >
                    <Button className='dashboard_btn'>
                        <FaCartArrowDown size={20} />
                        Orders</Button>
                </Link>
                <hr />
                <h2 className='text-gray-500'>Reports</h2>

                <Link to='/dashboard/order-reports' >
                    <Button className='dashboard_btn'>
                        <GiFullMetalBucket size={20} />
                        Orders</Button>
                </Link>
                <Link to='/dashboard/reports' >
                    <Button className='dashboard_btn'>
                        <TbReport size={20} />
                        Reports</Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar