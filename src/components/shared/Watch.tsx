import moment from "moment"
import { useState } from "react";

const Watch = () => {
    const [date, setDate] = useState(Date.now())
    setTimeout(() => {
        setDate(Date.now())
    }, 1000);
    return (
        <div className="w-full">
            <div className="timer mx-auto flex justify-center bg-[#06061a] text-white py-2">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
    )
}

export default Watch