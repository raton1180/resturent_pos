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

const OrderTable = () => {
    return (
        <div>
            <div className="flex justify-between mx-5 py-5 items-center">
                <h2 className=" text-[25px] font-semibold">Recent orders</h2>
                <Button>See All</Button>
            </div>
            <Table>
                <TableCaption>A list of your recent Orders.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-[#9191911f]">
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
                    <TableRow>
                        <TableCell>INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell >$250.00</TableCell>
                        <TableCell>INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell >$250.00</TableCell>
                    </TableRow>
                    <TableRow >
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
    )
}

export default OrderTable