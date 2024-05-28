const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
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
    message: {
        type: String,
        require: true,
    },
});

const contactModel = new model("contact", contactSchema);
module.exports = contactModel;