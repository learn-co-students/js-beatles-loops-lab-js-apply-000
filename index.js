function theBeatlesPlay(music, instrument){
  let musical = [];
  for (var i = 0; i < music.length; i++) {
    musical.push(`${music[i]} plays ${instrument[i]}`);
}
return musical;
  }
function johnLennonFacts (array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  let love = [];
  do { 
    love.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return love;
}
