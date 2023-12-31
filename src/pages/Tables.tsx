import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import { FaRegUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TableBookSchema } from "@/schemas/TableBookSchema";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Tables = () => {
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof TableBookSchema>>({
        resolver: zodResolver(TableBookSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    })

    const onSubmit = (values: z.infer<typeof TableBookSchema>) => {
        navigate("/menus")
        console.log(values)
    }


    return (
        <div className="w-full px-5 my-5">
            <div className="grid grid-cols-12 gap-3">
                {
                    [...Array(5)].map((_, idx) => (
                        <div key={idx} className="col-span-3">
                            <Dialog>
                                <DialogTrigger className="w-full ">
                                    <Card className="cursor-pointer bg-[#0a0a1a] flex flex-col items-start text-white border-gray-600 w-full">
                                        <CardHeader>
                                            <CardTitle>Table {idx + 1}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>Capacity: 4</p>
                                        </CardContent>
                                        <CardFooter>
                                            <h2 className="text-[16px] flex items-center gap-4">Status <FaArrowRight /><Badge variant="secondary" className="bg-green-900 text-white">Free</Badge></h2>
                                        </CardFooter>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="flex justify-center">
                                            <div className="my-5 w-fit bg-[#2cb50040] p-3 rounded-full text-[#58bf36]">
                                                <FaRegUserCircle className="" size={80} />
                                            </div>
                                        </DialogTitle>
                                        <DialogDescription>
                                            <h2 className="text-center text-[20px] font-semibold">Customer details of table 1</h2>
                                            <div className="my-5">
                                                <Form {...form}>
                                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                                        <FormField
                                                            control={form.control}
                                                            name="name"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Customer Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Name" {...field} />
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
                                                                    <FormLabel>Customer Phone</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Phone" {...field} />
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
                                                                    <FormLabel>Customer Email</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="Email" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <Button type="submit" className="w-full">Submit</Button>
                                                    </form>
                                                </Form>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Tables