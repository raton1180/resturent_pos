import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <div className="w-full">
      <div className="reports">
        <div className="grid grid-cols-12 gap-5 mx-5 py-3">
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home