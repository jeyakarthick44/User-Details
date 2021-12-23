const express = require("express");
const { getUsers } = require("../controller/userController")

const router = express.Router()

router.route('/').get(getUsers)
// router.route('/login').post(authUser)

module.exports = router