function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
  	for(var j = 0; j < instruments.length; j++){
  		var str = musicians[i] +  " plays " + instruments[i];
  		if(array.indexOf(str) ===  -1) {
  			array.push(str);
  		}
  	}
  }
  return array;
}
function johnLennonFacts(facts) {
	var array = [];
	var i = 0;
	while(i< facts.length) {
		array.push(facts[i] + "!!!");
		i++;
	}
	return array;
}
function iLoveTheBeatles(num) {
	var array = [];
	do{
		array.push("I love the Beatles!");
		num++;
	} while(num < 15);
	return array;
}
