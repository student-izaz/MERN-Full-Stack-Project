const {z} = require("zod");

// Creating an object schema

const signupSchema = z.object({
    name: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast 3 chars.."})
    .max(50, {message: "Name must not be more than 50 chars.."}),
    email: z
    .string({ required_error: "Email is required"})
    .trim()
    .email({ message: "Invalid email address"})
    .min(6, {message: "Email must be atleast 6 chars.."})
    .max(80, {message: "Email must not be more than 80 chars.."}),
    phone_no: z
    .string({ required_error: "Phone_no is required"})
    .trim()
    .min(10, {message: "Phone_no must be atleast 10 chars.."})
    .max(20, {message: "Phone_no must not be more than 20 chars.."}),
    password: z
    .string({ required_error: "Password is required"})
    .min(7, {message: "Password must be atleast 7 chars.."})
    .max(100, {message: "Password must not be more than 100 chars.."}),
});

module.exports = signupSchema;