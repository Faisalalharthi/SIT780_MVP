const router = require('express').Router()

const userService = require('../services/userService');

router.get('/', function (req, res, next) {
  if (req.isAuthenticated() && userService.isMember(req.user)) {
    res.render('member/index')
  }
  else {
    res.sendStatus(403);
  }

});


module.exports = router;