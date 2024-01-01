import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

const CurrentOrders = () => {
    return (
        <div className="m-5 p-4">
            <div className="md:flex justify-between">
                <div>
                    <h2 className="text-[20px] font-semibold">Current Orders</h2>
                    <p className="my-3">Today All Order are displaying</p>
                </div>
                <div className="flex gap-10">
                    <Link to={'/'}><Button>Home</Button></Link>
                    <Link to={'/menus'}><Button>Menus</Button></Link>
                    <Link to={'/'}><Button>Tables</Button></Link>
                </div>
            </div>

            <div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow className="hover:bg-[#ffffff05]">
                            <TableHead>SL No.</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Table</TableHead>
                            <TableHead >Items</TableHead>
                            <TableHead >Time</TableHead>
                            <TableHead >Order-Id</TableHead>
                            <TableHead >Status</TableHead>
                            <TableHead >Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="hover:bg-[#ffffff05]">
                            <TableCell>INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell >$250.00</TableCell>
                            <TableCell>INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell >$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default CurrentOrders