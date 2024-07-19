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

const getfeedback = async (req, res) => {
    try {
        const feedbacks = await feedbackModel.find();
        res.status(200).json(feedbacks)   
    } catch (error) {
        res.status(400).json({ msg: error });
    }    
};

module.exports =  { feedback, getfeedback };
