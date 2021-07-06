// add solution here
var musicians = [];
var instruments= [];
var largestArray = 0;
var answer = [];
function theBeatlesPlay(musicians, instruments){
  if (musicians.length > instruments.length){
    largestArray = musicians.length;
  }
  else{
    largestArray = instruments.length;
  }
  for(var i = 0; i<largestArray; i++){
    answer[i] = musicians[i] + " plays " + instruments[i];
  }
  return answer
}


function johnLennonFacts(fact){
var counter = 0;
var answer2 = [];
  while(counter < fact.length){
    answer2[counter] = fact[counter] + "!!!"
    counter++
  }
  return answer2;
}

function iLoveTheBeatles(number){
  var answer3 = [];
  var counter2 = 0;
  do {
    answer3[counter2++] = "I love the Beatles!";
    number++
    }
  while (number < 15);
  return answer3;
}