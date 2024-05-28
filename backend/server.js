require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;
const authRouter = require("./router/auth-router");
const contactRouter = require('./router/contact-router');
const feedbackRouter = require('./router/feedback-router');
const connectDB = require("./utils/db");

const corsOptions = {
  origin: "http://localhost:5173",
  method:   "GET, POST, DELETE, PATCH, PUT",
  Credential: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api", feedbackRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app listen at port no ${PORT}`);
  });
});
