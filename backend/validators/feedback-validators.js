const {z} = require("zod");

// Creating an object schema

const feedbackSchema = z.object({
    name: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast 3 chars.."})
    .max(50, {message: "Name must not be more than 50 chars.."}),
    from: z
    .string({ required_error: "Email is required"})
    .min(6, {message: "Email must be atleast 6 chars.."})
    .max(80, {message: "Email must not be more than 80 chars.."}),
    feedback: z
    .string({ required_error: "Feedback is required"})
    .min(4, {message: "Message must be atleast 4 chars.."})
    .max(1000, {message: "Message must not be more than 1000 chars.."}),
});

module.exports = feedbackSchema;