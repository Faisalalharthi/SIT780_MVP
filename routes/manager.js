const router = require('express').Router()

const UsersModel = require('../models/user');
const userService = require('../services/userService')

// Static Pages ================================================================
router.get('/', function (req, res, next) {
    if (req.isAuthenticated() && userService.isManager(req.user)){
        res.render('manager/index')
    }
    else{
        res.sendStatus(403)
    }
})


module.exports = router;