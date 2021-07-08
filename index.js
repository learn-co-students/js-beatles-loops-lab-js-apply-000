function theBeatlesPlay (musicians,instruments) {
  var Beatles = [];
  for (var i=0; i < musicians.length; i++) {
        Beatles.push(musicians[i] + " plays " + instruments[i]);
}
  return Beatles;
}

function johnLennonFacts(facts) {
    var i = 0
    while ( i < facts.length) {
         facts[i] += "!!!";
         i++;
     }
     return facts;
 }

function iLoveTheBeatles(num) {
     var love = [];
     do {
         love.push("I love the Beatles!");
         num++;
     } while (num < 15);
 
      return love;
 }
