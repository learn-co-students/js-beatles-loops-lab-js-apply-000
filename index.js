// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr =[] ;
  var i ; 
  for (i=0; i<musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]) }
  return arr ;
}

function johnLennonFacts(facts) {
  var new_facts = [] ;
  var i = 0 ;
  while ( i < facts.length) {
    new_facts.push( facts[i] + "!!!");
    i++ ; }
  return new_facts ; 
}

function iLoveTheBeatles(n) {
  var empty_list = [] ;
  var r = 15 - n ;
  do {
    if ( 15 > n ) {
      r = r - 1 ;
      empty_list.push("I love the Beatles!") }
    else {
      r = 0
      empty_list.push("I love the Beatles!") }
  } while (r !== 0);
  return empty_list ;
}