// add solution here
function theBeatlesPlay(musicians,instruments){
  let array = [];
  for(let m = 0; m <= 3; m++){
    array.push(musicians[m] + " plays " + instruments[m]);
  }return array;
}

function johnLennonFacts(facts){
  let array=[];
  for(let i = 0;i<facts.length;i++){
  array.push(facts[i] + "!!!");
  }return array;
}

function iLoveTheBeatles(n){
  let love="I love the Beatles!";
  let array=[];
 do{
    array.push(love);
    n += 1;
  }
  while(n<15);
  return array;
}