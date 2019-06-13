// add solution here
function theBeatlesPlay (musicians, instruments) {
  var string = []; 
    for (var i = 0; i < musicians.length; i++) {
      string.push(musicians[i] + " plays " + instruments[i]) ;
    } 
  return string; 
} 

function johnLennonFacts(facts) {
  var sentence = [] ;
  var i = 0 ;
  while (i < facts.length) {
    sentence.push(facts[i] + '!!!')
    i++ ; 
  }
  return sentence ; 
}

function iLoveTheBeatles(num) {
  var array = [] ; 
  do {
    array.push("I love the Beatles!") ; 
    num++ ; 
  }
  while (num < 15) ; 
  return array ; 
}