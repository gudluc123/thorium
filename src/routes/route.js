const express = require('express');
const router = express.Router();

router.get('/movies', function(req, res) {
   
    res.send('["fukrey","rang de basanti","one","avengers"]')
})

router.get('/movies/:movieid',function(req,res){
      
let movi=["fukrey","one","two","three","four"]
let value=req.params.movieid;
if(value>movi.length-1){
    res.send('does not exists')
}else{
    res.send(movi[value])
}

})
router.get('/movies',function(req,res){

    res.send('[{id:1,name:"harry poter1"},{id:2,name:"harry poter3"},{id:3,name:"harry potter4"}]')
})

router.get('/cinema/:cinemaid',function(req,res){
   let cinem=[{id:1,name:"harry poter1"},{id:2,name:"harry poter3"},{id:3,name:"harry potter4"}]
   let value =req.params.cinemaid;
   let found =false;
   for(let i=0;i<cinem.length;i++){
if(cinem[i].id==value){
    found=true;
    res.send(cinem[i])
    break;
}
   }
})





module.exports = router;
