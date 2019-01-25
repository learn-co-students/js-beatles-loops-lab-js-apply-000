// add solution here
    const musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(){
  var array = [];
  var i;
  for(i=0; i<4; i++){
    array.push( musician[i] + " plays " + instrument[i]);
  }
  return array;
}


function johnLennonFacts(facts){
  var array = [];
  var i=0;
  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return (array);
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  return (array);
}