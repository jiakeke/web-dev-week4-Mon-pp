const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

const createUser = (req, res) => {
  const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
  const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(500).json({ message: "Fail to create user" });
  }
};

const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found by id" });
  }
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const updatedUser = User.updateOneById(userId, updatedData);
  if (updateUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found by update" });
  }
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found by delete" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
