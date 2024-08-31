require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;
const connectDB = require("./utils/db");
const authRouter = require("./router/auth-router");
const contactRouter = require('./router/contact-router');
const feedbackRouter = require('./router/feedback-router');
const registrationRouter = require('./router/registeration-router');
const adminRouter = require('./router/admin-router');

// handle Cors Policy
const corsOptions = {
  origin: "http://localhost:5173",
  method:   "GET, POST, DELETE, PATCH, PUT",
  Credential: true,
}

// Use Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// define users routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api", feedbackRouter);
app.use("/api/form", registrationRouter);

// define admin route
app.use("/api/admin", adminRouter)


// connect database and start server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`app listen at port no ${process.env.PORT}`);
  });
}); 