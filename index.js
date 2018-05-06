function theBeatlesPlay  (musicians, instruments){
var emptyArray=[];

for (var count=0; count < musicians.length; count++){
  emptyArray.push(musicians[count] + " plays " + instruments[count]);
}

  return emptyArray;
}

function johnLennonFacts (facts){
const Johnfacts = [];
var i = 0;

while(i < facts.length){
Johnfacts.push(facts[i] + "!!!");
i++;
}
  return Johnfacts;
}

function iLoveTheBeatles (numb){
  var emptyArray=[];
  
  do {
    emptyArray.push("I love the Beatles!");
    numb++;
  }while (numb < 15);
   return emptyArray;
}