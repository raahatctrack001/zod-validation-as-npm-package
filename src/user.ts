import { z } from 'zod';

export const signinSchema = z.object({
    email: z.string().email({message: "Invalid Email"}),
    password: z
            .string()
            .min(8, {message: "Password must be at least 8 characters long"})
            .max(25, {message: "Password cannot be larger than 25 charactes long"})
});

export const signupSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters long"}),
    email: z.string().email(),
    password: z
            .string()
            .min(8, {message: "Password must be at least 8 characters long"})
            .max(25, {message: "Password cannot be larger than 25 charactes long"})
})

export type signinSchemaType = z.infer<typeof signinSchema>;
export type signupSchemaType = z.infer<typeof signupSchema>;
