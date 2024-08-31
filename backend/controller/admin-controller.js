const Users = require('../model/user-model');
const registerModel = require('../model/registration-model');
const Contact = require('../model/contact-model');
// const userModel = require('../model/user-model');

const admin = (req, res) => {
    res.status(200).json({msg: 'Admin Page!'});
};

const getalluser = async (req, res, next) => {
    try {
        const users = await registerModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ mas: "Users not found!"})
        next();
    }
}

const getSingleUser = async (req, res) => {
    try {
        const id = await req.params.id;
        const data = await registerModel.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const editUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;
        const update = await registerModel.updateOne({ _id: userId }, { $set: updatedUserData });
        res.status(200).json({ msg: "User Updated!", update});
    } catch (error) {
        res.status(401).json({ msg: "User can't updated!", error});
        next(error);
    }    
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await registerModel.deleteOne({ _id: userId });
        return res.status(200).json({ msg: "User Deletes Successfully! "});
    } catch (error) {
        res.status(401).json({ msg: "Something wents wrong, User not delete! "});
        next(error);
    }
}

const userscontact = async (req, res, next) => {
    try {
        const contact = await Contact.find();
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ mas: "Users not found!"})
        next();
    }
}

const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ msg: 'Contact Delete Successfully!'})
    } catch (error) {
        res.status(401).json({ msg: "Something wents wrong, Contact not delete! "});
        next(error);        
    }
}


module.exports = { admin, getalluser, userscontact, deleteUser, getSingleUser, editUser, deleteContact };