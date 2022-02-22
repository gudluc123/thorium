


function trim (){

let name="    rahul kumar   "
let result =name.trim()
console.log(result)

}
function convert (){


    let str1= "thorium"
    let lowercase=str1.toLowerCase()
    let uppercase=str1.toUpperCase()
    console.log(lowercase,uppercase)
}
module.exports.trim=trim;
module.exports.convert=convert;