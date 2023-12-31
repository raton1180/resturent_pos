import { Button } from "@/components/ui/button";
import posImg from "../assets/images/pos.png"
import { useForm } from "react-hook-form";
import * as z from "zod"
import { SignInSchema } from "@/schemas/SignInSchema";
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

const SignIn = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log(values)
  }

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-2 gap-4">
        <div className="mx-auto my-auto">
          <h2 className="font-semibold text-[30px]">Sign in to your POS System</h2>
          <div className="my-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
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
                        <Input placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Sign In</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className={`w-full h-screen`}>
          <img src={posImg} className="w-full h-screen" alt="pos image" />
        </div>
      </div>
    </div>
  )
}

export default SignIn