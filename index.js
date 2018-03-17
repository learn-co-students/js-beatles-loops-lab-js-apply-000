function theBeatlesPlay(musicians,instruments ){
  var emptyarray=[];
  for (var i=0;i<musicians.length;i++){
  emptyarray[i]=(musicians[i]+ " plays " +instruments[i]);
  }
  return emptyarray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var arrayfacts=[];
  var i=0;
  while (i<facts.length) {
  arrayfacts[i]=facts[i]+"!!!";
  i++;
  }
  return arrayfacts;
}


function iLoveTheBeatles (number){
  var ihatethebeatles=[];
  do {
  ihatethebeatles.push("I love the Beatles!");
  number++;
  } while (number<15 );
  return ihatethebeatles;
}