const UserSchema = require("../models/UserSchema");

// Register
async function registerUser(req, res) {
  try {
    const userJob = new UserSchema(req.body);
    await userJob.save();
    res.status(201).json(userJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// getusers
async function getAllUsers(req, res) {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  registerUser,
  getAllUsers 
};
