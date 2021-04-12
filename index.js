function theBeatlesPlay(musicians,instruments){
let arr = [];
for ( let i=0; i < musicians.length; i++ ){
  const str = `${musicians[i]} plays ${instruments[i]}`;
  arr.push(str);
  }
  return arr;
}

  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
    ];

  function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}


function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
} 

