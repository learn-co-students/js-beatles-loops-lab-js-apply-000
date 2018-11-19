var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay (musicians,instruments) {
  var beatleArray = [];
  for (let i=0; i<musicians.length;i++) {
    beatleArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatleArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);
function johnLennonFacts(array) {
  var result= []; 
  var i = 0; 
  while(i < array.length) {
    result.push(array[i] + '!!!')
      i++; 
      }
  return result; 
}

johnLennonFacts(facts);

function iLoveTheBeatles(number) { 
  let loveBeatles = []; 
  do {
        loveBeatles.push(`I love the Beatles!`);
        number++;
      } while (number < 15);

      return loveBeatles;
}