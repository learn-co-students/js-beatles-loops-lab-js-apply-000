const musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musician,instruments) {
  let emptyArray = [];
  
  for(let i=0; i<musician.length; i++) {
    emptyArray.push(musician[i] + ' plays ' + instruments[i]);
  }
  
  return emptyArray;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts) {
  let i = 0;
  let johnFacts = [];
  
  while(i < facts.length) {
    johnFacts.push(facts[i] + '!!!');
    i++;
  }
  
  return johnFacts;
}


let num = 7;

function iLoveTheBeatles(num) {
  //let loveBeatles = ["I","l","o","v","e","t","h","e","B","e","a","t","l","e","s"];
  let loveBeatles = "I love the Beatles!";
  let emptyArray = [];
  // let i = 0;
  
  do {
    emptyArray.push(loveBeatles);
    // i++;
    num++;
  } while (num < 15)
  
  return emptyArray;
}