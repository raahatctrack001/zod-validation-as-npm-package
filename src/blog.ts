import { z } from 'zod';

export const createBlogSchema = z.object({
    title: z
        .string()
        .min(10, {message: "Title must be at least 10 characters long."}),
    content: z  
        .string()
        .min(25, {message: "Content cannot be less than 25 characters"}),
    published: z.boolean(),
})

export const updateBlogSchema = z.object({
    title: z
        .string()
        .min(10, {message: "Title must be at least 10 characters long."}),
    content: z  
        .string()
        .min(25, {message: "Content cannot be less than 25 characters"}),
})

export type createBlogSchemaType = z.infer<typeof createBlogSchema>;
export type updateBlogSchemaType = z.infer<typeof updateBlogSchema>;