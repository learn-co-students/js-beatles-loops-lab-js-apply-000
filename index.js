

function theBeatlesPlay(musicians, instruments){
let arr1 = [];
for(let i=0;i < musicians.length;i++){
    arr1.push(`${musicians[i]} plays ${instruments[i]}`)
}
return arr1
}


function johnLennonFacts(facts){
let i = 0;
let full = [];
  while (facts[i]) {
    full.push(facts[i] + '!!!');
    i++;
}
return full
}


function iLoveTheBeatles(num){
  let arr2 = [];
  do {
    arr2.push("I love the Beatles!");
    num++;
}
while (num < 15);
  return arr2
}
