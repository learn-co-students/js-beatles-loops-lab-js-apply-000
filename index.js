// add solution here,
 function theBeatlesPlay(musicians,instruments) {
   var array = [];
   for (var i = 0; i < musicians.length; i++) {
     array.push(musicians[i] + ' plays ' + instruments[i] );
   }
   return array;
  }
   
  function johnLennonFacts(facts) {
    var array = [];
    var count = 0;
    while (count < facts.length) {
      array.push(facts[count] +"!!!");
      count++;
    }
     return array;
  }      

function iLoveTheBeatles(num) {
   var array = [];
    do {
      array.push("I love the Beatles!")
      num++;
    } while (num<15);
  return array;
}
