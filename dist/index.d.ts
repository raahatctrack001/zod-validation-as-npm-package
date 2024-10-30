import { signinSchemaType } from "./user";
import { signupSchemaType } from "./user";
import { createBlogSchemaType } from "./blog";
import { updateBlogSchemaType } from "./blog";
export declare const mediumSchema: {
    signinSchema: import("zod").ZodObject<{
        email: import("zod").ZodString;
        password: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
    signupSchema: import("zod").ZodObject<{
        name: import("zod").ZodString;
        email: import("zod").ZodString;
        password: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        password: string;
        name: string;
    }, {
        email: string;
        password: string;
        name: string;
    }>;
    createBlogSchema: import("zod").ZodObject<{
        title: import("zod").ZodString;
        content: import("zod").ZodString;
        published: import("zod").ZodBoolean;
        authorId: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        title: string;
        content: string;
        published: boolean;
        authorId: string;
    }, {
        title: string;
        content: string;
        published: boolean;
        authorId: string;
    }>;
    updateBlogSchema: import("zod").ZodObject<{
        id: import("zod").ZodString;
        title: import("zod").ZodString;
        content: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        title: string;
        content: string;
        id: string;
    }, {
        title: string;
        content: string;
        id: string;
    }>;
};
export { signinSchemaType, signupSchemaType, createBlogSchemaType, updateBlogSchemaType };
