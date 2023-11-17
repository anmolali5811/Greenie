import User from "../models/user.model.js"

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while retrieving user(s)."});
    }
};

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) return req.json({message: "Please Enter User ID"});
        const user = await User.findById(id);
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Could not find a note with id " + req.params.id});
    }
};

const createUsersInBulk = async (req, res) => {
    try {
        const data = req.body;
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const result = await User.insertMany(data, options);
        console.log(`${result.insertedCount} documents were inserted`);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while creating user(s)."});
    }
};


export {getAllUsers, createUsersInBulk, getUserById};
