const jwt = require("jsonwebtoken");
const userModel =require("../models/userModel")
const router = require("../routes/route")

const authenticate = function(req,res, next){

let token =req.headers["x-auth-token"]
let decodedToken = jwt.verify(token,"functionup-thorium")
if (decodedToken) {
    next ()
} else {
    res.send({status:false,msg:"invalid user"})
}

}


const authorised = function (req,res,next){
//     let user= req.body.message
//     let token = req.headers["x-auth-token"]

    let modifiedUser = req.params.userId

  let decodedUser = decodedToken.userId


  if (modifiedUser != decodedUser){
    res.send({status:false,msg:"no such user exists"})
  } else {
     next ()
  }

}
module.exports.authenticate =authenticate
module.exports.authorised =authorised