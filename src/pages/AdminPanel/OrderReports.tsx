import OrderTable from '@/components/custom/AdminPanel/OrderTable'
import { FaLongArrowAltRight } from 'react-icons/fa'

const OrderReports = () => {
  return (
    <div className="w-full">
      <div className="reports">
        <h2 className="mx-5 my-8 pb-10 text-white text-[25px] flex items-center gap-5">Admin Dashboard <FaLongArrowAltRight /> Orders Reports</h2>
      </div>
      <div className="mx-10 my-[-50px] bg-white rounded-lg">
        <OrderTable />
      </div>
    </div>
  )
}

export default OrderReports