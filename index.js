const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var legends = [];
var i = [];

function theBeatlesPlay(musicians,instruments) {
    for (i = 0; musicians.length > i; i++){
      legends.push(musicians[i]+' plays '+instruments[i]);
}
         return legends;
}
  
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];  
  
function johnLennonFacts(facts) {
  var i = 0;
  var yell = [];
    while(i < facts.length){
      yell.push(facts[i] +'!!!');
        i++;
    }
        return yell;
}

function iLoveTheBeatles(number) {
  var love = [];
  do{ 
   love.push('I love the Beatles!');
    number++; }
  while(i < 15);
    return love;
}