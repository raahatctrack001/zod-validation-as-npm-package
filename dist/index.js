"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediumSchema = void 0;
const user_1 = require("./user");
const user_2 = require("./user");
const blog_1 = require("./blog");
const blog_2 = require("./blog");
exports.mediumSchema = {
    signinSchema: user_1.signinSchema,
    signupSchema: user_2.signupSchema,
    createBlogSchema: blog_1.createBlogSchema,
    updateBlogSchema: blog_2.updateBlogSchema
};
