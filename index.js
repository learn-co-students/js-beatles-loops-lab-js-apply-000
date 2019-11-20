function theBeatlesPlay(musicians,instruments) {
let emptyArray = [];
for(let i = 0; i < musicians.length; i++) {
  emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
}
return emptyArray
}

function johnLennonFacts(facts){
  let array = [];
  let count = 0;
  while (count < facts.length) {
  array.push(facts[count] + '!!!');
  count++;
}
return array
}






