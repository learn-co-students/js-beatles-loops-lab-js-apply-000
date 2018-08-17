// add solution herunction theBeatlesPlay(musician, instruments){
function theBeatlesPlay(musician, instruments){
  var array=[];
var i=0;
  for ( var i=0; i<musician.length; i++){
    array.push(musician[i] + " plays " + instruments[i]);
}

return array;


}
function johnLennonFacts(facts){
  var array = [];
  let i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!")

     i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  {
  return array;

  }
}
