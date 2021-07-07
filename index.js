function theBeatlesPlay(musicians, instruments) {
const arr = [];
for(var i = 0; musicians.length > i ; i++){ 
arr.push(`${musicians[i]} plays ${instruments[i]}`); 
}
return arr;
}


const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"

]

function johnLennonFacts(facts) {
  let arr = [];
  let i = 0;
  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}


function iLoveTheBeatles(i) {
let arr = [];
do {
arr.push('I love the Beatles!');
i++
}
while (i < 15);
return arr;
}