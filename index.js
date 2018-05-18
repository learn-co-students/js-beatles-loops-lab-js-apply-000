function theBeatlesPlay(musicians,instruments) {
var musiciansplay = [];
var i;
for (i = 0; i < musicians.length; i++) {
    var text = musicians[i] + " plays " + instruments[i];
    musiciansplay.push(text);
}
 return musiciansplay; 
}

 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(facts) {
  var facts2 = [];
  var index = 0;
  while (index < facts.length) {
     const text =  facts[index] + "!!!";
     facts2.push(text);
     index++;
  }
  return facts2; 
}


function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  const iLoveText = "I love the Beatles!";

do {
  arr.push(iLoveText);
  i++;
}

while (i <= number && number < 15);
return arr;
}


