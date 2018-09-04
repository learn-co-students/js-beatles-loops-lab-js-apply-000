// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  let newArray = [];
  
  for(let i=0; i < musicians.length; ++i){
      newArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0
  let shoutArray = []
  while(i<facts.length){
    shoutArray.push(facts[i] + '!!!');
    i++;
  }
  return shoutArray;
}

function iLoveTheBeatles(num){
  let bin = [];
  var i=-1
  if(num<15){
  do{
    bin.push('I love the Beatles!')
    i++
  } while (i<num)
  }else {
    bin.push('I love the Beatles!')
  }
  return bin;
}