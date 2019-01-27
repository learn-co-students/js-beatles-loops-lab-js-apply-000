
function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++){
        array.push(`${musicians[i]} plays ${instruments[i]}`)
      }
      return array;
}

function johnLennonFacts(facts){
  var lennonFacts = [];
  let i = 0;
  while (i < facts.length){
    lennonFacts.push(`${facts[i]}!!!`)
    i++;

  }
  return lennonFacts
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
} while (num < 15)
  return arr;
}
