const express = require('express')
const router = express.Router();

const getallControllers = require('../Controllers/user-controller')

router.route("/").get(getallControllers.getAlluser)
router.route("/testing").get(getallControllers.getAlluserTesting)

module.exports = router
