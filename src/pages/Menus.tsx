import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa"
import { IoAddOutline } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";


const Menus = () => {
    return (
        <div className="w-full px-5 my-5">
            <div className="grid grid-cols-12 gap-3 h-[400px] overflow-y-scroll custom-scrollbar">
                {
                    [...Array(15)].map((_, idx) => (
                        <div key={idx} className="col-span-3">
                            <Card className="cursor-pointer bg-[#110d36] hover:bg-[#ffffff05] transition flex flex-col items-start text-white border-gray-600 w-full">
                                <CardHeader>
                                    <CardTitle>Set Menu {idx + 1}</CardTitle>
                                </CardHeader>
                                <CardFooter>
                                    <h2 className="text-[16px]">{idx + 1} Items</h2>
                                </CardFooter>
                            </Card>
                        </div>
                    ))
                }

            </div>
            <div className="h-[400px] overflow-y-scroll custom-scrollbar">
                <h2 className="text-white my-2">Category</h2>
                <div className="grid grid-cols-12 gap-3 ">
                    {
                        [...Array(15)].map((_, idx) => (
                            <div key={idx} className="col-span-3">
                                <div className="flex">
                                    <Card className="cursor-pointer bg-[#02122775] hover:bg-[#ffffff21] transition flex flex-col items-start text-white border-gray-600 w-full">
                                        <div className="flex justify-between w-full">
                                            <div>
                                                <CardHeader>
                                                    <CardTitle>Item Name {idx + 1}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p>&#2547; 224</p>
                                                </CardContent>
                                                <CardFooter>
                                                    <h2 className="text-[16px] flex items-center gap-4">Orders <FaArrowRight /><span className="text-gray-600">Kitchen</span></h2>
                                                </CardFooter>
                                            </div>
                                            <div className="rounded-lg flex flex-col items-center justify-between m-4">
                                                <IoAddOutline  size={35}/>
                                                <h2 className="text-[30px]">0</h2>
                                                <IoMdRemove size={35} />
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Menus