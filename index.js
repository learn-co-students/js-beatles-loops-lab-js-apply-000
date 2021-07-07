function theBeatlesPlay (musicians, instruments) {
  let x = [];
for (let i = 0; i<musicians.length; i++) {
  x.push(`${musicians[i]} plays ${instruments[i]}`);
}
return x;
}

function johnLennonFacts (facts){
 let i = 0;
while (i<facts.length){
  facts [i] += '!!!';
i++;
}
return facts;
}


  
function iLoveTheBeatles (n) {
let x = [];
do {
  x.push ('I love the Beatles!');
  n++;
 } while (n<15);
 return x}