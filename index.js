function theBeatlesPlay(musicians, instruments){
  var result = new Array();
  	for(var i = 0; i < musicians.length; i++){
  	 result.push(musicians[i] + " plays " + instruments[i])
  	}
  return result
}

function johnLennonFacts(facts){
  	var i = 0;
  	var result = [];
  		while(i < facts.length){
 			result.push(facts[i] + "!!!")
 			i++
		}
	return result	
}

function iLoveTheBeatles(num){
	var result = [];
	do{
		result.push("I love the Beatles!");
		num++
	} while (num < 15)
	return result;
};
