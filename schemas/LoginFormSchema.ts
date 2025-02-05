import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email("Please provie correct email"),
    password: z.string().min(6, "Password should be al least 6 symbols"),
});