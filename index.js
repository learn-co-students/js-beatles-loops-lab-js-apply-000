// add solution here
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay = (musicians,instruments) => {
 let empty = [];
 
 for (let i = 0; i < musicians.length; i++){
   empty.push(musicians[i] + ' plays ' + instruments[i]);
 } return empty;
 
};
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
    
function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++
  }
  return (facts);
}


function iLoveTheBeatles(n){
let list = [];
let BBB = () => list.push('I love the Beatles!');
do {BBB();n++} 
while (n < 15) return list; 
}

