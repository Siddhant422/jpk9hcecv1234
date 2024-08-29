const loginController = require('../controllers/loginController');

const express = require('express');

const router = express.Router();

router
    .get('/login',(req,res) => {
        res.status(200).json({
            data:"login page"
        })
    })
    .post('/login', loginController.login);

module.exports = router;