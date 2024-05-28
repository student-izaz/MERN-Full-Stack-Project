const {z} = require("zod");

// Creating an object schema

const loginSchema = z.object({
    email: z
    .string({ required_error: "Email is required"})
    .trim()
    .email({ message: "Invalid email address"})
    .min(6, {message: "Email must be atleast 6 chars.."})
    .max(80, {message: "Email must not be more than 80 chars.."}),
    password: z
    .string({ required_error: "Password is required"})
    .min(7, {message: "Password must be atleast 7 chars.."})
    .max(100, {message: "Password must not be more than 100 chars.."}),
});

module.exports = loginSchema;