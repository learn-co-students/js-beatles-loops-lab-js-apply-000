// function theBeatlesPlay(musicians,instruments){
//   var array=[]
//   for (var i=0;i<musicians.length;i++){
//     array.push(`${musicians[i]} plays ${instruments[i]}`)
//   }
//   return array
// }
//
// function johnLennonFacts(facts){
//   var i=0
//   while (i < facts.length){
//     facts[i]=facts[i] + '!!!'
//     i+=1
//   }
//   return facts
// }
//
// function iLoveTheBeatles(number){
//   var array=[]
//   do {
//     array.push("I love the Beatles!")
//     number++
//   }
//   while (number < 15)
//   return array
// }


function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}



function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(i < facts.length){
    array.push(facts[i] + '!!!')
    i++
  }
return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++
  }
  while (
    number < 15
  )
  return array
}
