import * as z from "zod"

export const SignInSchema = z.object({
    email: z.string().email().min(2, {
        message: "Email is required",
    }),
    password: z.string().min(4, {message: "Password must be at least 4 characters."}),
})