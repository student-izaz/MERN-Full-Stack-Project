const registrationModel = require('../model/registration-model');

const registration = async (req, res) => {
    try {
        const response = req.body;
        await registrationModel.create(response);
        res.status(200).json({ msg: "Register Successfully!"})
    } catch (error) {
        res.status(400).json({ msg: `${'Registration', error}` });
    }
}

module.exports = { registration };
