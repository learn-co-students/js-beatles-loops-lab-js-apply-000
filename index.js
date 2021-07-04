// function theBeatlesPlay(musicians, instruments) {
//   var play = [];
//   for(var i = 0; i < musicians.length; i++) {
//     play.push(`${musicians[i]} plays ${instruments[i]}`);
//   }
//   return play;
// }
// function johnLennonFacts(facts) {
//   var array = [];
//   let i = 0;
//   while (i < facts.length) {
//     array.push(`${facts[i]}!!!`);
//     i++;
//   }
//   return array
// }


// function iLoveTheBeatles(number){
//   var love=[];
//   var i=0;
//   do {
//     love.push("I love the Beatles!");
//     i++;
//   }
//   while ( i <= number && number < 15);
//   return love;
// }
  
function theBeatlesPlay(musicians, instruments){
  var play =[];
  for(var  i= 0 ; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return play
}


function johnLennonFacts(facts){
  var johnLennonFactsNew = [];
  let i = 0;
  while (i < facts.length){
    johnLennonFactsNew.push(`${facts[i]}!!!`);
    i++;
  }
  return johnLennonFactsNew;
}

function iLoveTheBeatles(number){
  var love = [];
  var i = 0;
  do {
    love.push(`I love the Beatles!`);
    i++;
  }
  while ( i <= number && number < 15);
  return love;
}
