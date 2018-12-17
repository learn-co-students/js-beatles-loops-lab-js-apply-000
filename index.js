var anArray = []

function theBeatlesPlay(musicians, instruments){
  for (var i = 0; i < musicians.length; i++){
    anArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return anArray  
}

function johnLennonFacts(array){
  var factsIndex = 0
  while (factsIndex < array.length) {
    array[factsIndex] = array[factsIndex] + "!!!";
    factsIndex += 1;
  }
  return array
}

// function johnLennonFacts(array){
//   var factsIndex = 0
//   var newArray = []
//   while (factsIndex < array.length) {
//     newArray.push(`${array[factsIndex]}!!!`);
//     factsIndex += 1;
//   }
//   return newArray
// }

function iLoveTheBeatles(num){
  var array = []
  do{
    array.push('I love the Beatles!');
    num ++;
  } while (num < 15)
  return array
}