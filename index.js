// add solution here
function theBeatlesPlay(array1,array2){
  var music = [];
  for(var i=0;i < array1.length; i++){
    music.push(array1[i] + " plays " + array2[i]);
  }
  return music;
}

function johnLennonFacts(array1){
  var facts =[];
  var f = 0;
  while(f <array1.length){
    facts.push(array1[f] +"!!!");
    f++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var love =[];
  do{
    love.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return love;
}