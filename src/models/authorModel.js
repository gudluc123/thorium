const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String,
    age: Number,
    address: String,
    rating:Number
}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', authorSchema)






// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });

// module.exports = mongoose.model('Author', authorSchema)
