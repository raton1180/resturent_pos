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
import { FaLongArrowAltRight } from "react-icons/fa";


const Produucts = () => {
  return (
    <div className="w-full">
    <div className="reports">
      <h2 className="mx-5 my-8 pb-10 text-white text-[25px] flex items-center gap-5">Admin Dashboard <FaLongArrowAltRight /> Products</h2>
    </div>
    <div className="mx-10 my-[-50px] bg-white rounded-lg">
      <div>
        <div className="flex justify-between mx-5 py-5 items-center">
          <Button variant={"outline"} className="hover:bg-[#056014] hover:text-white px-20 flex gap-2 items-center">
            <FaPlus size={15} />
            Add New Products
          </Button>
          <Button>See All</Button>
        </div>
        <Table>
          <TableCaption>A list of products.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#9191911f]">
              <TableHead>Image</TableHead>
              <TableHead>Prodcuct ID.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead >Price</TableHead>
              <TableHead >Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
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
    </div>
  </div>
  )
}

export default Produucts