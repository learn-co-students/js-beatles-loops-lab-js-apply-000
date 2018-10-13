// add solution here
function theBeatlesPlay(musicians, instruments){
  const myArr = [];
  for(var i = 0; i < musicians.length; i++){
    myArr[i] = musicians[i] + " plays " + instruments[i];
  }
  return myArr;
}

function johnLennonFacts(facts){
  //facts is an array of N facts
  var i = facts.length;
  while(i > 0){
			facts[facts.length - i] = facts[facts.length - i] + "!!!";
			i--;
	}
  return facts;
}

function iLoveTheBeatles(number){
  var myArr = [];
  do{
    myArr = ["I love the Beatles!"];
    number++;
  }while(number < 15)

	return myArr[15 - number];
}
