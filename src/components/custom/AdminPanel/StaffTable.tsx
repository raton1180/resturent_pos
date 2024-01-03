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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { StaffSchema } from "@/schemas/StaffSchema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Requried from "@/components/ui/requried";
import { useAddStaffMutation, useGetAllStaffQuery } from "@/store/features/staff";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

const StaffTable = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [AddStaff] = useAddStaffMutation()
    const { data: staffs, isLoading: isLoadingUser } = useGetAllStaffQuery({
        page:1,
        pageSize:10,
    })
    console.log("🚀 ~ file: StaffTable.tsx:48 ~ StaffTable ~ staffs:", staffs)

    const form = useForm<z.infer<typeof StaffSchema>>({
        resolver: zodResolver(StaffSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof StaffSchema>) => {
        try {
            AddStaff(values)
                .then((res: any) => {
                    if (res?.data?.status === 200) {
                        toast.success("Staff Created Success");
                        form.reset();
                        setOpenDialog(false)
                    } else {
                        toast(res.error.data.error.message);
                    }
                })
                .catch(() => {
                    toast("Somthing Wrong. Please try again.");
                })
        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="flex justify-between mx-5 py-5 items-center">
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger>
                        <Button variant={"outline"} className="hover:bg-[#056014] hover:text-white px-20 flex gap-2 items-center">
                            <FaPlus size={15} />
                            Add New Staff
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="text-black my-5">
                        <DialogHeader >
                            <DialogTitle className="my-5 text-gray-600">Add New Staff</DialogTitle>
                            <DialogDescription>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name <Requried /></FormLabel>
                                                    <FormControl>
                                                        <Input  {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number <Requried /></FormLabel>
                                                    <FormControl>
                                                        <Input type="number" min={0} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" min={0} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <Input type="password" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex justify-end gap-3 items-center">
                                            <DialogClose asChild >
                                                <Button type="button" variant="secondary">
                                                    Close
                                                </Button>
                                            </DialogClose>
                                            <Button type="submit">Submit</Button>
                                        </div>
                                    </form>
                                </Form>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

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