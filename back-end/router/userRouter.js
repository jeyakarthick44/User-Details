const express = require("express");
const { createUser,getUsers,getUserById,updateUser,deleteUser } = require("../controller/userController")

const router = express.Router()

router.route('/').get(getUsers)
router.route('/create').post(createUser)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser)


module.exports = router

