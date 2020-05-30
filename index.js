const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
let list = [];
  for (let i=0; i < musicians.length; i++){
    const a = musicians[i] + " plays " + instruments[i];
    list.push(a);
}

function theBeatlesPlay(musicians, instruments){
  return list;
}




const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
function johnLennonFacts(facts) {
  const newFacts = []

  let i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}

function iLoveTheBeatles(a){
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    a++;
  }while (a<15)
  return arr;
}