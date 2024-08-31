const bcrypt = require("bcrypt");
const userModel = require("../model/user-model");


// User Create Account Route
const createAccount = async (req, res) => {
  const { name, email, phone_no, password, isAdmin } = req.body;
  try {
    const userExit = await userModel.findOne({ email });
    if (userExit) {
      return res.status(400).json({ msg: "User Alerady Exit..." });
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const userCreated = await userModel.create({
          name,
          email,
          phone_no,
          password: hash,
          isAdmin,
        });
        res
          .status(200)
          .json({
            msg: "Account Created Successfully!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
          });
      });
    });
  } catch (error) {
    res.status(400).send({ msg: "found an error" });
  }
};

// User Login Route
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExit = await userModel.findOne({ email });

    if (!userExit) {
      return res.status(400).json({ msg: "Invalid Credential..." });
    }

    const correctCredential = await bcrypt.compare(password, userExit.password);

    if (correctCredential) {
      res
        .status(200)
        .json({ msg: "Login Successfully...", 
        token: await userExit.generateToken(),
        userId: userExit._id.toString(), });
    } 
    else {
      res.status(400).json({ msg: "Invalid Credential..." });
    }
    console.log(token)

  } catch (error) {
    res.status(500).json({ msg: "Internal server error..." });
  }
};

// To send user data - user logic 

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json(userData);
  } catch (error) {
    console.log('Error from the user route', error)
  }
}

module.exports = { createAccount, login, user };
