const contactModel = require("../model/contact-model");

const contact = async (req, res) => {
  try {
    const response = req.body;
    await contactModel.create(response);
    res.status(200).json({ msg: "message send successfully..." });
  } catch (error) {
    res.status(400).json({ msg: "something wents wrong..." });
  }
};

module.exports = { contact };
