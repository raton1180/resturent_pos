import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaArrowRight } from "react-icons/fa"

const Menus = () => {
    <div className="w-full px-5 my-5">
        <div className="grid grid-cols-12 gap-3">
            {
                [...Array(5)].map((_, idx) => (
                    <div key={idx} className="col-span-3">
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
                    </div>
                ))
            }

        </div>
    </div>
}

export default Menus