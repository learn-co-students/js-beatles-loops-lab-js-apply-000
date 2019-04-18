var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
var empty = [];
for(var i in musicians){
  empty.push(musicians[i] + " plays " + instruments[i]);
}
return empty;
}


function johnLennonFacts(facts){
  let shout = [];
  
  let i = 0;
  while(i< facts.length){
    shout.push(`${facts[i]}!!!`)
    i++
  }
  return shout;
}  
  
function iLoveTheBeatles(n){
  let love =  []; 
  do{
  love.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return love;
 
}