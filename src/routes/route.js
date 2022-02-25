const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": [
               {
                   "bookingNumber": 1,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286598000000',
                   "bookedOn": '31/08/2021',
                   "bookedFor": '01/09/2021'
               },
               {
                   "bookingNumber": 2,
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286518000000',
                   "bookedOn": '31/08/2001',
                   "bookedFor": '01/09/2001'
               },
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
   ]
 
//    router.post('/playerss', function (req, res) {
 
//        //LOGIC WILL COME HER
//        let newplayer =req.body.newplayer;
//        for(i=0;i<players.length;i++){
//            if(players[i].name==newplayer.name){
//                res.send({"msg":"player already exist"})
//            }else{
//                players.push(newplayer)
//                res.send({"msg":players})
//            }
//        }

//        res.send(  { data: players , status: true }  )
//    })
  
   router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
 
       //LOGIC WILL COME HER
       let name =req.params.playerName;
       let isplayerpresent=false;
       for(let i=0;i<players.length;i++){
           if(players[i].name==name){
               isplayerpresent=true;
           }
       }
       if (!isplayerpresent){
           return res.send("player not present")
       }
           
       let booking =req.body;
       let bookingId=req.params.bookingId;
       for (let i=0;i<players.length;i++){
           if(players[i].name==name){
               let isbookingpresent=false;
           }
       
       for(let j=0;j<players[i].booking.length;j++){
           if(players[i].booking[j].bookingNumber==bookingId){
               return res.send("booking with this id already present")
           }
       }
         res .send("player present")

    }
   })
  
module.exports = router;

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })





module.exports = router;
