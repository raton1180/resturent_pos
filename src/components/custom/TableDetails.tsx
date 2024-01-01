import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IoAddOutline } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


const TableDetails = () => {
    return (
        <div className="relative text-white mx-2 h-screen">
            <div className="header flex border-b-2 border-black py-4 justify-between">
                <Select>
                    <SelectTrigger className="bg-[#040410] w-1/2 border-gray-700">
                        <SelectValue placeholder="Select Table" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex items-center gap-5">
                    <RiDeleteBin5Line className="cursor-pointer" size={25} />
                    <FaEdit className="cursor-pointer" size={25} />
                </div>
            </div>
            <div className=" overflow-auto max-h-[500px] custom-scrollbar p-4 border border-gray-700 rounded">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-[#ffffff0d] my-2 border-gray-700">
                            <TableHead>Item Details</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            [...Array(15)].map((_, idx) => (
                                <TableRow key={idx} className="hover:bg-[#ffffff0d] my-2 border-gray-700">
                                    <TableCell>
                                        <div>
                                            <h2 className="font-semibold text-[20px]">{idx + 1}. Pizza</h2>
                                            <div className="flex gap-5 my-5 items-center">
                                                <IoAddOutline size={20} className="bg-[#ffffff0d]" />
                                                <Input defaultValue={1} type="number" className="w-[70px] bg-transparent border-none h-[20px]" />
                                                <IoMdRemove size={20} className="bg-[#ffffff0d]" />

                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>&#2547; 500</TableCell>
                                    <TableCell><RiDeleteBin5Line className="cursor-pointer" size={25} /></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <div className="my-2 text-gray-500">
                <p>Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="footer absolute bottom-0 border-t-2 border-black w-full py-5">
                <div className="w-full flex items-center">
                    <Button className="bg-transparent border border-gray-700 w-full">Discount</Button>
                    <Button className="bg-transparent border border-gray-700 w-full">Cash</Button>
                    <Button className="bg-transparent border border-gray-700 w-full">Online</Button>
                </div>
                <div className="p-3 text-gray-500">
                    <Table>
                        <TableBody>
                            <TableRow className="hover:bg-[#ffffff05] border-none">
                                <TableCell className="pt-[1px]">Tax:</TableCell>
                                <TableCell className="pt-[1px]">&#2547; 500</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-[#ffffff05] border-none">
                                <TableCell className="pt-[1px]"> SubTotal:</TableCell>
                                <TableCell className="pt-[1px]">&#2547; 2500</TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-[#ffffff05] border-none">
                                <TableCell className="pt-[1px] font-semibold text-[25px] text-white">Total:</TableCell>
                                <TableCell className="pt-[1px] font-semibold text-[25px] text-white">&#2547; 2700</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button className="w-full">Place Order</Button>
                </div>
            </div>
        </div>
    )
}

export default TableDetails