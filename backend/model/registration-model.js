const {Schema, model} = require('mongoose');

const registrationSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone_no: {
        type: String,
        require: true,
    },
    apply_for: {
        type: String,
        require: true,
    },
    training_mode: {
        type: String,
        require: true,
    },
    collage: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    year: {
        type: String,
        require: true,
    }
});

const registrationModel = new model("Registration", registrationSchema);
module.exports = registrationModel;