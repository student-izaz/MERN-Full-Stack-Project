const Users = require('../model/user-model');
const Contact = require('../model/contact-model');

const admin = (req, res) => {
    res.status(200).json({msg: 'Admin Page!'});
};

const getalluser = async (req, res, next) => {
    try {
        const users = await Users.find({}, {password: 0});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ mas: "Users not found!"})
        next();
    }
}

const userscontact = async (req, res, next) => {
    try {
        const contact = await Contact.find();
        res.status(200).json({ contact });
    } catch (error) {
        res.status(400).json({ mas: "Users not found!"})
        next();
    }
}


module.exports = { admin, getalluser, userscontact };