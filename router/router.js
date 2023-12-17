const express = require("express");
const {
  registerUser,
  getAllUsers,
} = require("../controller/controller");


const router = express.Router();


router.get('/getAllUsers', getAllUsers);
router.post('/register', registerUser);

module.exports = router;

