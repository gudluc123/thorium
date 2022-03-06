const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){

let currentDate = new Date()
let currentDayOfMonth=currentDate.getDate()
let currentMonth=currentDate.getMonth()
let currentYear =currentDate.getFullYear()
let Time=currentDate.getHours()+" "+currentDate.getMinutes()+" "+currentDate.getSeconds()
const dateString=currentYear+" "+(currentMonth+1)+" "+currentDayOfMonth+" "+Time

let ipaddress=req.connection.remoteAddress;
console.log(dateString,ipaddress,req.path)
next()

})


mongoose.connect("mongodb+srv://rahul0542:xp5m0rpm9lxrg5uR@cluster0.rxmel.mongodb.net/rahul?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
