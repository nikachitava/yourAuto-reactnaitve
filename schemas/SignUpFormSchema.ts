import { z } from "zod";

export const SignUpFormSchema = z.object({
    name: z.string().min(2, "Min lenght 2 symbols"),
    surname: z.string().min(5, "Min lenght 5 symbols"),
    phone: z.string(),
    email: z.string().email("Please provide correct email"),
    password: z.string().min(6, "Password should be al least 6 symbols"),
});