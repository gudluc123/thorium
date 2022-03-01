const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController.js")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookController.createBook)
    

router.get("/bookList",bookController.getBookList)

router.post("/booksYear",bookController.bookYear)

router.get("/particularBooks",bookController.getParticularBook)

router.get("/INBooks",bookController.getInrBooks)

router.get("/randomBooks",bookController.getRandomBooks)

module.exports = router;