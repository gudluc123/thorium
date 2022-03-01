const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique:true,
        required:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        
        type:Number,
        default:2021
    },
    
    tags: [String],
    authorName:String,
    totalPages:Number,
    stockAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

// sales: {type: Number, default: 10}
// isPublished: Boolean,
//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
