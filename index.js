function theBeatlesPlay(musicians, instruments) {
  var returnArr  = [];
  for(let i = 0; i < musicians.length; i++){
    returnArr.push(musicians[i] + " plays " + instruments[i])
  }
  console.log(returnArr)
  return returnArr
}

function johnLennonFacts(array){
  let i = 0;
  let newArray = [];
  while (i < array.length) {
   newArray.push(array[i] + "!!!")
   i++
  }
  return newArray
}

function iLoveTheBeatles(number){
var sheesh = [];
do {
  sheesh.push("I love the Beatles!")
 number++
} while (number < 15);
return sheesh
}
