
const obj1 =require('../loggersfolder/loggers')
const obj2=require('../utils/helper')
const obj3=require('../validator/formator')


const express = require('express');
const router = express.Router();


router.get('/test-me', function (req, res) {
    
    obj1.welcome('firstmessage')
    obj2.helper('helper')
    obj3.trim()
    obj3.convert()
    
    res.send('this is my first node js application')
});


module.exports = router;