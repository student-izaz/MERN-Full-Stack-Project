const {Schema, model} = require('mongoose');

const feedbackSchema = new Schema({
    image: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    from: {
        type: String,
        require: true,
    },
    feedback: {
        type: String,
        require: true,
    }
});

const feedbackModel = new model("feedback", feedbackSchema);
module.exports = feedbackModel;