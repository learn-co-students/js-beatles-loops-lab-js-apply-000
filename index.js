const musiciens = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["guiter", "Bass Guiter", "Lead Guiter", "Drums"]

function theBeatlesPlay(musiciens, instruments){
  const temp = [];
  for(var i = 0;i<musiciens.length;i++){
    temp[i] = musiciens[i] + " plays " +instruments[i];
  }
  return temp;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  const end = facts.length
  
  while (i < end) {
    facts[i] +="!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var temp = [];
  
  do{
    number++;
    temp.push("I love the Beatles!")
  } while(number < 15)
  
  return temp;
}