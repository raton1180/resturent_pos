import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { FaUsers } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import OrderTable from "@/components/custom/AdminPanel/OrderTable";



const Home = () => {
  return (
    <div className="w-full">
      <div className="reports">
        <h2 className="mx-5 my-8 text-white text-[25px]">Admin Dashboard</h2>
        <div className="grid grid-cols-12 gap-5 mx-5 pb-28">
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardContent className="flex justify-between items-center">
                <div className="my-3 flex flex-col gap-2">
                  <h2 className="text-gray-600 text-[25px] font-[500]">Customer</h2>
                  <p className="text-[20px] font-[500] text-[#484c50]">13</p>
                </div>
                <div className="bg-red-500 rounded-full p-5 text-white">
                  <FaUsers size={30} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardContent className="flex justify-between items-center">
                <div className="my-3 flex flex-col gap-2">
                  <h2 className="text-gray-600 text-[25px] font-[500]">Produts</h2>
                  <p className="text-[20px] font-[500] text-[#484c50]">13</p>
                </div>
                <div className="bg-[#03144ecf] rounded-full p-5 text-white">
                  <ImSpoonKnife size={30} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardContent className="flex justify-between items-center">
                <div className="my-3 flex flex-col gap-2">
                  <h2 className="text-gray-600 text-[25px] font-[500]">Orders</h2>
                  <p className="text-[20px] font-[500] text-[#484c50]">13</p>
                </div>
                <div className="bg-[#e59709cf] rounded-full p-5 text-white">
                  <FaShoppingCart size={30} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardContent className="flex justify-between items-center">
                <div className="my-3 flex flex-col gap-2">
                  <h2 className="text-gray-600 text-[25px] font-[500]">Sales</h2>
                  <p className="text-[20px] font-[500] text-[#484c50]">&#2547; 2500</p>
                </div>
                <div className="bg-[#124e03cf] rounded-full p-5 text-white">
                  <FaBangladeshiTakaSign size={30} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mx-10 my-[-50px] bg-white rounded-lg">
        <OrderTable />
      </div>
    </div>
  )
}

export default Home