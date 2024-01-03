import * as z from "zod"

export const StaffSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required",
    }),
    phone: z.string().min(2, {
        message: "Phone is required",
    }),
    email: z.string().email().min(2, {
        message: "Email is required",
    }),
    password: z.string().min(4, { message: "Password must be at least 4 characters." }),
})