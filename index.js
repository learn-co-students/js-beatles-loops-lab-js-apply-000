const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay (musicians, instruments){
  var whoPlays = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlays.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return whoPlays;
}


function johnLennonFacts(facts){
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!" )
    i++;
  }
  return newFacts
}

// let's just assume n is 1
function iLoveTheBeatles (n) {
  var i = 0;
  var arr = [];

  do {
    arr.push("I love the Beatles!");
    i++;
  } while(i <= n && n <= 15)

  return arr;
}


// function iLoveTheBeatles(arr){
// var arr = ["I love the Beatles!"];
//   for(var i=0; i<15; i++){
//     if(i === 0){
//       arr.push("I love the Beatles!");
//     }
//     else{
//       arr.push(arr[i]);
//       i++;
//     }
//   }
//   return (arr);
// }
