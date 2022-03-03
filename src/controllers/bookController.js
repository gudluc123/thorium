// const { count } = require("console")
// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

const { count } = require("console")
const res = require("express/lib/response")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    // let authorId = book.author
    // let publisherId = book.publisher

    //validation a
    // if(!authorId) return res.send('The request is not valid as the author details are required.')

    // //validation b
    // let author = await authorModel.findById(authorId)
    // if(!author) return res.send('The request is not valid as no author is present with the given author id')

    // //validation c
    // if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    // //validation d
    // let publisher = await publisherModel.findById(publisherId)
    // if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const newUpdate = async function(req,res){
    let data =req.body;
    let books= await bookModel.find().populate("publisher")
let bookBypublish = books.filter(ele=> (ele.publisher.name=="penguine")|| (ele.publisher.name=="harpercollins"))
let bookName= bookBypublish.map(x=>x.name)
console.log(bookName)
let updatecover =[]
for (let i=0;i<bookName.length;i++){
    let element =bookName[i]
    let updateData = await bookModel.findOneAndUpdate({name:element},{$set:data},{new:true})
    updatecover.push(updateData)
}
res.send({data:updatecover})
}

const updateBooks= async function (req,res){
    let Books = await bookModel.find().populate("author")
    console.log(Books)
    let authorRating = Books.filter(ele=> (ele.author.rating >= 3.5))

    let BooksName = authorRating.map(x=>x.name)
     
    console.log(BooksName)
     let updatePrice =[]
     for (let i=0; i<BooksName.length;i++){
         let element=BooksName[i]
         let updateBookPrice= await bookModel.findOneAndUpdate({name:element},{$inc:{price:+10}},{new:true})
         updatePrice.push(updateBookPrice)
     }
     res.send({date:updatePrice})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.newUpdate=newUpdate
module.exports.updateBooks=updateBooks























// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
