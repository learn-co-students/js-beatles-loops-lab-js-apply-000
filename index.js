function theBeatlesPlay(musicians,instruments){
let arr = [ ];
for ( let i=0;i< musicians.length; i++ ){
  const str = musicians[ i ] + " plays "+ instruments[ i ];
  arr.push( str );
  
}
return arr;
}

function johnLennonFacts(facts){
var array = [];
var i = 0;
  while (i < facts.length) {
      array.push(facts[ i ] + "!!!");
       i++;
}
return array;
}

function iLoveTheBeatles(Number) {
  var array = [];
  var i = Number;
  do {
    array.push("I love the Beatles!");
    i++;
  }
  while (i > 7 && i < 15);
  return array;
}