import * as z from "zod"

export const TableBookSchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
})