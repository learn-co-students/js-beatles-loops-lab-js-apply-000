// add solution here

function theBeatlesPlay(musicians,instruments){
var myarray =[];
let count = 0;
while (count < musicians.length){
  myarray.push(musicians[count] + " plays " + instruments[count])
  count++;
  } 
  return myarray
}

function johnLennonFacts(facts){
  var myarray = [];
  let count = 0;
  while (count < facts.length){
    myarray.push(facts[count] + "!!!");
    count++;
  }
  return myarray
}
function iLoveTheBeatles(number){
  var text = []
    do {
   text << "I Love the Beatles!"
   number++;
  }  while (number < 15)
  return text
} 

