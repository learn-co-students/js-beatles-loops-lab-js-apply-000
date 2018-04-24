var musicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison", 
  "Ringo Starr"];
var instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"];

function theBeatlesPlay(musicians, instuments) {
  var band = [];

  for (let i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
function johnLennonFacts(facts) {
  let john = [];
  let i = 0;
  while (i < facts.length) {
    john[i] = facts[i] + "!!!";
    i++;
  }
  return john; 
} 

function iLoveTheBeatles(number) {
  let x = [];
  do {
     x.push(`I love the Beatles!`);
     number++;
   } while (number < 15); {
      return x;
  }
}
  