const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get('/test-me-1',function(req,res){
    res.send({a:45,b:36})
})

router.get('/students/:name',function(req,res){
    let studentsName=req.params.name;
    res.send(studentsName)
})
router.post('/post-1',function(req,res){
    res.send([2,3,4,5])
})
router.post('/post-2',function(req,res){
    let id = req.body.user
    let pwd =req.body.pwd
    console.log(id,pwd)
    res.send({msg:"hi",status:true})
})
router.get('/post-3',function(req,res){
    let data =req.query
    console.log(data)
    res.send({msg:data})
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;