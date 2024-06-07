const express = require('express');
const router = express.Router();
const group = require('express-group-routes');
const userController = require('../controller/userController');

router.group('/users', (router) => {
    router.get('/show', userController.index);
    router.post('/store', userController.store);
});


module.exports = router;
