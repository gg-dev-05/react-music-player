const router = require('express').Router();
// let User = require('../models/User')

router.route('/').get((req, res) => {
    res.send("get route for user")
});

router.route('/add').post((req, res) => {
    res.send("/add route (POST) for user")
});

module.exports = router;