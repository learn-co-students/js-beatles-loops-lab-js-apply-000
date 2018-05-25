function theBeatlesPlay(musicians, instruments){
var empty = [];
for (let i=0; i < musicians.length; i++){
empty.push(musicians[i] + " plays" + " " + instruments[i]);
}
return empty
};

function johnLennonFacts(arrayOfFacts){

  var newFacts = [];
  var i = 0;

  while (i < arrayOfFacts.length){
    newFacts.push(arrayOfFacts[i] + "!!!");
    i++;
  }

  return newFacts

}


function iLoveTheBeatles(number){
  var nothing = [];
do {
  nothing.push("I love the Beatles!");
} while (number++ && number < 15);
  return nothing
};
