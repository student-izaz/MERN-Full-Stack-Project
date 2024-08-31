const jwt = require("jsonwebtoken");
const userModel = require("../model/user-model");

// create a middleware gor check user login or not.

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorized HTTP, Token not Provided" });
  }

  const jwtToken = token.replace("Bearer").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); // verify token

    const userData = await userModel.findOne({email: isVerified.email}).select({password: 0,}); //find user

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized invalid Token" });
  }
};

module.exports = authMiddleware;
