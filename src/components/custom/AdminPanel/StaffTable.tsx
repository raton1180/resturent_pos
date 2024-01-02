import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const StaffTable = () => {
    return (
        <div>
            <div className="flex justify-between mx-5 py-5 items-center">
                <Button variant={"outline"} className="hover:bg-[#056014] hover:text-white px-20 flex gap-2 items-center">
                    <FaPlus size={15} />
                    Add New Staff
                </Button>
                <Button>See All</Button>
            </div>
            <Table>
                <TableCaption>A list of staff.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-[#9191911f]">
                        <TableHead>Staff Number.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead >Phone</TableHead>
                        <TableHead >Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell >$250.00</TableCell>
                        <TableCell>
                            <div className="flex gap-2">
                                <Button variant={"destructive"} className="flex gap-2 items-center">
                                    <RiDeleteBin6Line size={15} />
                                    Delete
                                </Button>
                                <Button className="bg-[#062552] flex gap-2 items-center">
                                    <FaRegEdit size={15} />
                                    Update
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default StaffTable