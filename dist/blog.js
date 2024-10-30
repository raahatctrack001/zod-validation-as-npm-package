"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = void 0;
const zod_1 = require("zod");
exports.createBlogSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(10, { message: "Title must be at least 10 characters long." }),
    content: zod_1.z
        .string()
        .min(25, { message: "Content cannot be less than 25 characters" }),
    published: zod_1.z.boolean(),
});
exports.updateBlogSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(10, { message: "Title must be at least 10 characters long." }),
    content: zod_1.z
        .string()
        .min(25, { message: "Content cannot be less than 25 characters" }),
});
