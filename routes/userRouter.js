const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.use(auth);

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers"); 

// GET /tours
router.get("/", auth, getAllUsers);

// POST /tours
router.post("/", auth, createUser);

// GET /tours/:tourId
router.get("/:userId", getUserById);

// PUT /tours/:tourId
router.put("/:userId", updateUser);

// DELETE /tours/:tourId
router.delete("/:userId", deleteUser);

module.exports = router;
