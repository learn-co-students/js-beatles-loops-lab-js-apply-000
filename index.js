// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var person = musicians[i];
    var instrument = instruments[i];
      newArray.push(`${person} plays ${instrument}`);
  }
  
  return newArray;
}


function johnLennonFacts(facts) {
var exclaimFacts = [];

  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
     exclaimFacts.push(fact + "!!!")
    i++
  }
  
return exclaimFacts;  
}

function iLoveTheBeatles(num) {
  var love = [];
  var i = 0;
    do {
     love.push("I love the Beatles!")
      num++;
    }
while (num < 15);
return love;
}
