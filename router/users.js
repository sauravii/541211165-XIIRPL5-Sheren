const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

// get all users data
router.get("/users", userController.index);

// post users
router.post("/user", userController.store);

// put users by id
router.put("/user/:id", userController.update);

// delete user by id
router.delete("/user/:id", userController.delete);

module.exports = router;
