const feedbackModel = require('../model/feedback-model');

const feedback = async (req, res) => {
    try {
        const response = req.body;
        await feedbackModel.create(response);
        res.status(200).json({ msg: "Feedback send successfully..." });     
    } catch (error) {
        res.status(400).json({ msg: "feedback not send" });
    }    
};

module.exports = {feedback};
