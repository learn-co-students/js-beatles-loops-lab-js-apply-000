// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
   

function theBeatlesPlay (musicians, instruments){
   var beatles = [];
   for (let i=0; i < musicians.length; i++){
      beatles.push(`${musicians[i]} plays ${instruments[i]}`);
      }
       return beatles;
}
   
function johnLennonFacts (fact){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var beatles2 = [];
  var f = 1;
  while (f<=facts.length){
    beatles2.push(`${facts[f]}!!!`);
    f++;
  }
  return beatles2;
}
