// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let x=0;x < musicians.length; x++){
    var string = `${musicians[x]} plays ${instruments[x]}`;
    arr.push(string);
  }
  return arr; 
}

function johnLennonFacts (facts) {

  var newOne = []; 
  var x = 0 ;
  while (x < facts.length){
  newOne.push(facts[x] + "!!!") ;
  x++
  }

  return newOne; 
}

function iLoveTheBeatles (number) {
  var two = [];
  do { 
    two.push("I love the Beatles!");
    number++
  }
  while (number<15);
  return two

}